import { supabase } from './supabase';

export const newsService = {
    async getAllNews() {
        const { data, error } = await supabase
            .from('news')
            .select(`
        *,
        profiles:author_id (
          full_name,
          avatar_url
        )
      `)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    },

    async getNewsById(id) {
        const { data, error } = await supabase
            .from('news')
            .select(`
        *,
        profiles:author_id (
          full_name,
          avatar_url
        )
      `)
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    },

    async createNews(newsData) {
        const { data, error } = await supabase
            .from('news')
            .insert([{
                ...newsData,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            }])
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    async updateNews(id, newsData) {
        const { data, error } = await supabase
            .from('news')
            .update({
                ...newsData,
                updated_at: new Date().toISOString()
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    async deleteNews(id) {
        const { error } = await supabase
            .from('news')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return { success: true };
    },

    async getNewsByCategory(category) {
        const { data, error } = await supabase
            .from('news')
            .select(`
        *,
        profiles:author_id (
          full_name,
          avatar_url
        )
      `)
            .eq('category', category)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    }
}; 