import { StorageBuckets } from "../../config/enum/storage-buckets.enum";
import { NEWS_TABLE } from "../../config/constants/db-tables.constant";
import { storageService } from "../storage/storage.service";
import { supabase } from "../supabase";
import { News, NewsFormValues, NewsResponse } from "./interfaces/news";

export const newsService = {
    async getNews(): Promise<News[]> {
        const { data, error } = await supabase.from(NEWS_TABLE)
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return data;
    },

    async createNews(formData: NewsFormValues): Promise<NewsResponse> {
        const { title, content, category_id, files } = formData;

        const file = storageService.validateFile(files);

        const { image_url } = await storageService.uploadFile(file, StorageBuckets.NEWS);

        const news: News = {
            title,
            content,
            category_id,
            image_url,
            created_at: new Date(),
        }

        const { error } = await supabase
            .from(NEWS_TABLE)
            .insert(news)
            .select()
            .single();

        if (error) throw error;

        return {
            success: true,
            message: 'Noticia creada exitosamente',
        };
    },

    async updateNews(id: string, formData: Partial<NewsFormValues>): Promise<NewsResponse> {
        const { title, content, category_id, files } = formData;

        let image_url = formData.image_url || "";

        if (!id) { throw new Error('No se ha proporcionado el id de la noticia a actualizar'); }

        if (files && files.length) {
            const file = storageService.validateFile(files);

            const { image_url: newImageUrl } = await storageService.uploadFile(file, StorageBuckets.NEWS);

            if (newImageUrl) {
                image_url = newImageUrl;
            }
        }

        const news: News = {
            id,
            title: title || "",
            content: content || "",
            category_id: category_id || "",
            image_url,
            created_at: new Date(),
        }

        const { error } = await supabase
            .from(NEWS_TABLE)
            .update(news)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        return {
            success: true,
            message: 'Noticia actualizada exitosamente',
        };
    },

    async deleteNews(id: string): Promise<NewsResponse> {
        if (!id) {
            throw new Error("No se ha proporcionado el id de la noticia a eliminar");
        }

        const { error } = await supabase
            .from(NEWS_TABLE)
            .delete()
            .eq('id', id);

        if (error) throw error;

        return {
            success: true,
            message: 'Noticia eliminada exitosamente'
        };
    }
}