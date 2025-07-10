export interface Category {
    id: string;
    name: string;
    description: string;
    created_at: string;
}

export interface CategoryFormValues {
    name: string;
    description: string;
}