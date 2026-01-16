/// <reference types="vite/client" />

import { IMAGE_RECORD_TABLE } from "../../config/constants/db-tables.constant";
import { StorageBuckets } from "../../config/enum/storage-buckets.enum";
import { storageService } from "../storage/storage.service";
import { storage, supabase } from "../supabase";
import { DeleteImageRecord, ImageRecord } from "./interfaces/image-record";

export const imageRecordService = {
  async getImageRecords(image_type_ids?: string[]): Promise<ImageRecord[]> {
    let query = supabase
      .from(IMAGE_RECORD_TABLE)
      .select("*")
      .order("created_at", { ascending: false });

    if (image_type_ids && image_type_ids.length > 0) {
      query = query.in("image_type_id", image_type_ids);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getActiveImageRecords(
    image_type_ids?: string[]
  ): Promise<ImageRecord[]> {
    let query = supabase
      .from(IMAGE_RECORD_TABLE)
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    if (image_type_ids && image_type_ids.length > 0) {
      query = query.in("image_type_id", image_type_ids);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async createImageRecord(
    formData: FormData
  ): Promise<{ success: boolean; message: string }> {
    const files: File[] = formData.getAll("file") as File[];
    const image_type_id: string = formData.get("image_type_id") as string;
    const description: string | null = formData.get("description") as
      | string
      | null;

    if (!files || !image_type_id) {
      throw new Error("No se han proporcionado archivos o tipo de imagen");
    }

    const file = await storageService.validateFile(files);

    const { image_url } = await storageService.uploadFile(
      file,
      StorageBuckets.IMAGE_RECORD
    );

    const image_record: ImageRecord = {
      name: file.name,
      image_url,
      image_type_id,
      description: description || "",
      is_active: true,
      created_at: new Date(),
    };

    const { error } = await supabase
      .from(IMAGE_RECORD_TABLE)
      .upsert(image_record, { onConflict: "name" });

    if (error) throw error;

    return { success: true, message: "Imagen cargada correctamente" };
  },

  async updateImageRecord(
    id: string,
    is_active: boolean
  ): Promise<{ success: boolean; message: string }> {
    const { error } = await supabase
      .from(IMAGE_RECORD_TABLE)
      .update({ is_active })
      .eq("id", id);

    if (error) throw error;

    return { success: true, message: "Imagen actualizada correctamente" };
  },

  async deleteImageRecord({
    id,
    name,
  }: DeleteImageRecord): Promise<{ success: boolean; message: string }> {
    if (!id || !name) {
      throw new Error("No se ha proporcionado un id");
    }

    const { error: imageError } = await storage
      .from(StorageBuckets.IMAGE_RECORD)
      .remove([name]);
    if (imageError) throw imageError;

    const { error } = await supabase
      .from(IMAGE_RECORD_TABLE)
      .delete()
      .eq("id", id);

    if (error) throw error;

    return { success: true, message: "Imagen eliminada correctamente" };
  },
};
