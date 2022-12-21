export interface Post {
  id: number;
  title: string;
  description: string;
  status: number;
  created_at: string;
  updated_at: string;
  images: image_post[];
}

export interface image_post {
  id: number;
  uri: string;
  extension: string;
  created_at: string;
  updated_at: string;
}
