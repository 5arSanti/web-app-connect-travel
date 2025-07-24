import { StorageBuckets } from "../../config/enum/storage-buckets.enum";
import { supabase } from "../supabase";
import { ImageUpload } from "./interfaces/image-upload";


export const storageService = {

    validateFile(files: File[]): File {
        if (!files || !files.length) {
            throw new Error("No se han proporcionado archivos");
        }

        if (files.length > 1) {
            throw new Error("Solo se puede cargar un archivo");
        }

        if (files[0].size > 1 * 1024 * 1024) {
            throw new Error("El archivo debe ser menor a 1MB");
        }
        return files[0];
    },

    async uploadFile(file: File, storage: StorageBuckets): Promise<ImageUpload> {
        const { data, error } = await supabase.storage
            .from(storage)
            .upload(file.name, file, {
                contentType: file.type,
                upsert: true,
            });

        if (error) throw error;

        const image_url = `${import.meta.env.VITE_DB_PROJECT_URL}/storage/v1/object/public/${data.fullPath}`;

        return {
            id: data.id,
            path: data.path,
            fullPath: data.fullPath,
            image_url
        };
    },

    async deleteFile(path: string, storage: StorageBuckets): Promise<void> {
        const { data, error } = await supabase.storage
            .from(storage)
            .remove([path]);

        if (error) throw error;
    }
}