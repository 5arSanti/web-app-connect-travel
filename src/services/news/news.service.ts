import { NEWS_TABLE } from "../../constants/db-tables.constant";
import { supabase } from "../supabase";
import { News } from "./interfaces/news";

export const newsService = {
    async getNews(): Promise<News[]> {
        const { data, error } = await supabase.from(NEWS_TABLE)
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return data;
    }
}