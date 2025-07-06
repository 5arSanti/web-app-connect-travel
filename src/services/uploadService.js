import { storage } from './supabase';

export const uploadService = {
    async uploadImage(file, folder = 'images') {
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${folder}/${Date.now()}.${fileExt}`;

            const { data, error } = await storage
                .from('uploads')
                .upload(fileName, file, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (error) throw error;

            const { data: { publicUrl } } = storage
                .from('uploads')
                .getPublicUrl(fileName);

            return {
                url: publicUrl,
                filename: fileName,
                path: data.path
            };
        } catch (error) {
            console.error('Upload error:', error);
            throw error;
        }
    },

    async uploadMultipleImages(files, folder = 'images') {
        const uploadPromises = files.map(file => this.uploadImage(file, folder));
        return Promise.all(uploadPromises);
    },

    async deleteImage(filename) {
        try {
            const { error } = await storage
                .from('uploads')
                .remove([filename]);

            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Delete error:', error);
            throw error;
        }
    },

    getImageUrl(filename) {
        const { data: { publicUrl } } = storage
            .from('uploads')
            .getPublicUrl(filename);

        return publicUrl;
    },

    async uploadAvatar(file, userId) {
        return this.uploadImage(file, `avatars/${userId}`);
    },

    async uploadNewsImage(file, newsId) {
        return this.uploadImage(file, `news/${newsId}`);
    }
}; 