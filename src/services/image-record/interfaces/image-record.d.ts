import { ImageRecordType } from "../enum/image-record.enum";

export interface ImageRecord {
    id?: string;
    name: string;
    image_url: string;
    image_type: ImageRecordType;
    description: string;
    is_active: boolean;
    created_at: Date;
}

export interface UploadFileFormValues {
    files: File[];
    image_type: ImageRecordType | null;
    description: string;
}