export interface ImageRecord {
  id?: string;
  name: string;
  image_url: string;
  image_type_id: string;
  description: string;
  is_active: boolean;
  created_at: Date;
}

export interface UploadFileFormValues {
  files: File[];
  image_type_id: string | null;
  description: string;
}

export interface DeleteImageRecord {
  id: string;
  name: string;
}
