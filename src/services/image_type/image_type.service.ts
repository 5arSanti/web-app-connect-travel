import { IMAGE_TYPE_TABLE } from "../../config/constants/db-tables.constant";
import { StorageBuckets } from "../../config/enum/storage-buckets.enum";
import { storageService } from "../storage/storage.service";
import { storage, supabase } from "../supabase";
import {
  CreateImageType,
  ImageType,
  ImageTypeFormValues,
  ImageTypeResponse,
} from "./interfaces/image_type";

export const imageTypeService = {
  async getImageTypes(): Promise<ImageType[]> {
    const { data, error } = await supabase
      .from(IMAGE_TYPE_TABLE)
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  },

  async createImageType(
    formData: ImageTypeFormValues
  ): Promise<ImageTypeResponse> {
    const { name, files } = formData;

    if (!name) {
      throw new Error("El nombre es requerido");
    }

    if (!files || files.length === 0) {
      throw new Error("La imagen es requerida");
    }

    const file = await storageService.validateFile(files);
    const { image_url } = await storageService.uploadFile(
      file,
      StorageBuckets.IMAGE_TYPES_BANNER
    );

    const imageType: CreateImageType = {
      name,
      image_url,
    };

    const { error } = await supabase.from(IMAGE_TYPE_TABLE).insert(imageType);
    if (error) throw error;

    return { success: true, message: "Tipo de imagen creado correctamente" };
  },

  async updateImageType(
    id: string,
    formData: Partial<ImageTypeFormValues>
  ): Promise<ImageTypeResponse> {
    const { name, files, image_url: existingImageUrl } = formData;

    if (!id) {
      throw new Error(
        "No se ha proporcionado el id del tipo de imagen a actualizar"
      );
    }

    let image_url = existingImageUrl || "";

    if (files && files.length > 0) {
      const file = await storageService.validateFile(files);
      const { image_url: newImageUrl } = await storageService.uploadFile(
        file,
        StorageBuckets.IMAGE_TYPES_BANNER
      );
      if (newImageUrl) {
        image_url = newImageUrl;
      }
    }

    const imageType: Partial<ImageType> = {
      id,
      name: name || "",
      image_url,
    };

    const { error } = await supabase
      .from(IMAGE_TYPE_TABLE)
      .update(imageType)
      .eq("id", id);

    if (error) throw error;

    return {
      success: true,
      message: "Tipo de imagen actualizado correctamente",
    };
  },

  async deleteImageType(
    id: string,
    image_url?: string
  ): Promise<ImageTypeResponse> {
    if (!id) {
      throw new Error(
        "No se ha proporcionado el id del tipo de imagen a eliminar"
      );
    }

    if (image_url) {
      try {
        // Extract the path from the image_url
        // URL format: ${VITE_DB_PROJECT_URL}/storage/v1/object/public/${fullPath}
        const urlParts = image_url.split("/storage/v1/object/public/");

        if (urlParts.length > 1) {
          const filePath = urlParts[1];
          const { error: storageError } = await storage
            .from(StorageBuckets.IMAGE_TYPES_BANNER)
            .remove([filePath]);

          if (storageError) throw storageError;
        }
      } catch (error) {
        console.error("Error deleting file from storage:", error);
      }
    }

    const { error } = await supabase
      .from(IMAGE_TYPE_TABLE)
      .delete()
      .eq("id", id);

    if (error) throw error;

    return { success: true, message: "Tipo de imagen eliminado correctamente" };
  },
};
