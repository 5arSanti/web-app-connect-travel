import { ImageRecordType } from "../enum/image-record.enum";

export interface ImageRecord {
  id?: string;
  name: string;
  image_url: string;
  image_type: ImageRecordType;
  description: string;
  is_active: boolean;
  image_type_id?: string;
  created_at: Date;
}

export interface UploadFileFormValues {
  files: File[];
  image_type: ImageRecordType | null;
  description: string;
}

export interface DeleteImageRecord {
  id: string;
  name: string;
}
