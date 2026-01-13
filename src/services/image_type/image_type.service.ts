import { IMAGE_TYPE_TABLE } from "../../config/constants/db-tables.constant";
import { supabase } from "../supabase";
import { CreateImageType, ImageType } from "./interfaces/image_type";

export const imageTypeService = {
  async getImageTypes(): Promise<ImageType[]> {
    const { data, error } = await supabase.from(IMAGE_TYPE_TABLE).select("*");
    if (error) throw error;
    return data;
  },

  async createImageType(
    imageType: CreateImageType
  ): Promise<{ success: boolean; message: string }> {
    const { error } = await supabase.from(IMAGE_TYPE_TABLE).insert(imageType);
    if (error) throw error;
    return { success: true, message: "Tipo de imagen creado correctamente" };
  },
};
