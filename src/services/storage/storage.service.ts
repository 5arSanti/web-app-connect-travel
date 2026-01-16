/// <reference types="vite/client" />
import { StorageBuckets } from "../../config/enum/storage-buckets.enum";
import { supabase } from "../supabase";
import { ImageUpload } from "./interfaces/image-upload";

export const storageService = {
  async validateFile(files: File[]): Promise<File> {
    if (!files || !files.length) {
      throw new Error("No se han proporcionado archivos");
    }

    if (files.length > 1) {
      throw new Error("Solo se puede cargar un archivo");
    }

    let fileToUpload = files[0];
    if (fileToUpload.size > 500 * 1024 && fileToUpload.type.match(/^image\/(jpeg|jpg|png)$/i)) {
      try {
        fileToUpload = await this.compressImage(fileToUpload);
      } catch (error) {
        console.warn("Error al comprimir imagen, subiendo original:", error);
      }
    }

    if (fileToUpload.size > 2 * 1024 * 1024) {
      throw new Error("El archivo debe ser menor a 2MB");
    }
    return fileToUpload;
  },

  async compressImage(
    file: File,
    maxWidth: number = 1920,
    maxHeight: number = 1920,
    quality: number = 0.8
  ): Promise<File> {
    return new Promise((resolve, reject) => {
      if (!file.type.match(/^image\/(jpeg|jpg|png)$/i)) {
        resolve(file);
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width = width * ratio;
            height = height * ratio;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("No se pudo obtener el contexto del canvas"));
            return;
          }

          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";

          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("Error al comprimir la imagen"));
                return;
              }

              const fileName = file.name.replace(/\.[^/.]+$/, "");
              const fileExtension =
                file.type === "image/png" ? ".jpg" : ".jpg";
              const compressedFile = new File(
                [blob],
                `${fileName}${fileExtension}`,
                {
                  type: "image/jpeg",
                  lastModified: Date.now(),
                }
              );

              resolve(compressedFile);
            },
            "image/jpeg",
            quality
          );
        };

        img.onerror = () => {
          reject(new Error("Error al cargar la imagen"));
        };
      };

      reader.onerror = () => {
        reject(new Error("Error al leer el archivo"));
      };
    });
  },

  async uploadFile(file: File, storage: StorageBuckets): Promise<ImageUpload> {
    const { data, error } = await supabase.storage
      .from(storage)
      .upload(file.name, file, {
        contentType: file.type,
        upsert: true,
      });

    if (error) throw error;

    const image_url = `${
      import.meta.env.VITE_DB_PROJECT_URL
    }/storage/v1/object/public/${data.fullPath}`;

    return {
      id: data.id,
      path: data.path,
      fullPath: data.fullPath,
      image_url,
    };
  },

  async deleteFile(path: string, storage: StorageBuckets): Promise<void> {
    const { error } = await supabase.storage.from(storage).remove([path]);

    if (error) throw error;
  },
};
