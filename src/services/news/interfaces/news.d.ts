export interface News {
    id?: string;
    title: string;
    content: string;
    image_url: string;
    category_id: string;
    created_at: Date;
}

export interface NewsFormValues {
    id?: string;
    title: string;
    content: string;
    category_id: string;
    files: File[];
    image_url?: string;
}

export interface NewsResponse {
    success: boolean;
    message: string;
}