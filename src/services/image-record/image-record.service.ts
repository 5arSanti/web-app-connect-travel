import { IMAGE_RECORD_STORAGE, IMAGE_RECORD_TABLE } from "../../constants/db-tables.constant";
import { storage, supabase } from "../supabase";
import { ImageRecordType } from "./enum/image-record.enum";
import { ImageRecord } from "./interfaces/image-record";

export const imageRecordService = {
    async getImageRecords(): Promise<ImageRecord[]> {
        const { data, error } = await supabase.from(IMAGE_RECORD_TABLE)
            .select('*')
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
    },

    async createImageRecord(formData: FormData): Promise<{ success: boolean, message: string }> {
        const files: File[] = formData.getAll('file') as File[];
        const image_type: ImageRecordType = formData.get('image_type') as ImageRecordType;
        const description: string = formData.get('description') as string;

        if (!files || !image_type) {
            throw new Error("No se han proporcionado archivos o tipo de imagen");
        }

        if (files && files.length > 1) {
            throw new Error("Solo se puede cargar un archivo");
        }

        const file = files[0];

        if (file.size > 1 * 1024 * 1024) {
            throw new Error("El archivo debe ser menor a 1MB");
        }

        const { data: imageData, error: imageError } = await storage.from(IMAGE_RECORD_STORAGE)
            .upload(file.name, file, {
                contentType: file.type,
                upsert: true,
            });
        if (imageError) throw imageError;

        const image_record: ImageRecord = {
            name: file.name,
            image_url: imageData.fullPath,
            image_type,
            description,
            is_active: true,
            created_at: new Date(),
        }

        const { data, error } = await supabase
            .from(IMAGE_RECORD_TABLE)
            .upsert(image_record, { onConflict: 'name' });
        if (error) throw error;
        return { success: true, message: "Imagen cargada correctamente" };
    }
}