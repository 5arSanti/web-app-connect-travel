import { CATEGORIES_TABLE } from "../../constants/db-tables.constant";
import { supabase } from "../supabase";
import { Category, CategoryFormValues } from "./interface/categories.interface";

export const categoriesService = {
    async getCategories(): Promise<Category[]> {
        const { data, error } = await supabase.from(CATEGORIES_TABLE)
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return data;
    },

    async createCategory(values: CategoryFormValues): Promise<{ success: boolean, message: string }> {

        if (!values.name || !values.description) {
            return { success: false, message: "Todos los campos son requeridos" };
        }

        const { error } = await supabase.from(CATEGORIES_TABLE)
            .insert(values)
            .select();

        if (error) throw error;

        return { success: true, message: "Categoría creada correctamente" };
    },

    async deleteCategory(id: string): Promise<{ success: boolean, message: string }> {
        if (!id) {
            return { success: false, message: "ID de la categoría requerido" };
        }

        const { error } = await supabase.from(CATEGORIES_TABLE)
            .delete()
            .eq('id', id);

        if (error) throw error;

        return { success: true, message: "Categoría eliminada correctamente" };
    }
}