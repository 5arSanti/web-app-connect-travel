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
