export interface ConnectService {
    id: string;
    name: string;
    description: string;
    image_url: string;
    icon_name: string;
    created_at: Date;
}

export interface ConnectServiceFormValues {
    id?: string;
    name: string;
    description: string;
    icon_name: string;
}