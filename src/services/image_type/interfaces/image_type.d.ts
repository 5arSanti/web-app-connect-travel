export interface ImageType {
  id: string;
  name: string;
  image_url?: string;
  created_at: Date;
}

export interface CreateImageType {
  name: string;
  image_url?: string;
}

export interface ImageTypeFormValues {
  id?: string;
  name: string;
  files: File[];
  image_url?: string;
}

export interface ImageTypeResponse {
  success: boolean;
  message: string;
}
