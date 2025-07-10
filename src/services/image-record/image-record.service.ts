/// <reference types="vite/client" />

import { IMAGE_RECORD_TABLE } from "../../config/constants/db-tables.constant";
import { StorageBuckets } from "../../config/enum/storage-buckets.enum";
import { storageService } from "../storage/storage.service";
import { storage, supabase } from "../supabase";
import { ImageRecordType } from "./enum/image-record.enum";
import { DeleteImageRecord, ImageRecord } from "./interfaces/image-record";

export const imageRecordService = {
    async getImageRecords(): Promise<ImageRecord[]> {
        const { data, error } = await supabase.from(IMAGE_RECORD_TABLE)
            .select('*')
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
    },

    async getActiveImageRecords(): Promise<ImageRecord[]> {
        const { data, error } = await supabase.from(IMAGE_RECORD_TABLE)
            .select('*')
            .eq('is_active', true)
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
    },

    async getImageRecordsByType({ image_type }: { image_type?: ImageRecordType }): Promise<ImageRecord[]> {
        const { data, error } = await supabase.from(IMAGE_RECORD_TABLE)
            .select('*')
            .eq('image_type', (image_type ?? '*')!)
            .eq('is_active', true)
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data
    },

    async createImageRecord(formData: FormData): Promise<{ success: boolean, message: string }> {
        const files: File[] = formData.getAll('file') as File[];
        const image_type: ImageRecordType = formData.get('image_type') as ImageRecordType;
        const description: string = formData.get('description') as string;

        if (!files || !image_type) {
            throw new Error("No se han proporcionado archivos o tipo de imagen");
        }

        const file = storageService.validateFile(files);

        const { image_url } = await storageService.uploadFile(file, StorageBuckets.IMAGE_RECORD);

        const image_record: ImageRecord = {
            name: file.name,
            image_url,
            image_type,
            description,
            is_active: true,
            created_at: new Date(),
        }

        const { error } = await supabase.from(IMAGE_RECORD_TABLE)
            .upsert(image_record, { onConflict: 'name' });

        if (error) throw error;

        return { success: true, message: "Imagen cargada correctamente" };
    },

    async updateImageRecord(id: string, is_active: boolean): Promise<{ success: boolean, message: string }> {
        const { error } = await supabase.from(IMAGE_RECORD_TABLE)
            .update({ is_active })
            .eq('id', id);

        if (error) throw error;

        return { success: true, message: "Imagen actualizada correctamente" };
    },

    async deleteImageRecord({ id, name }: DeleteImageRecord): Promise<{ success: boolean, message: string }> {
        if (!id || !name) {
            throw new Error("No se ha proporcionado un id");
        }

        const { error: imageError } = await storage.from(StorageBuckets.IMAGE_RECORD)
            .remove([name]);
        if (imageError) throw imageError;

        const { error } = await supabase.from(IMAGE_RECORD_TABLE)
            .delete()
            .eq('id', id);

        if (error) throw error;

        return { success: true, message: "Imagen eliminada correctamente" };
    }
}