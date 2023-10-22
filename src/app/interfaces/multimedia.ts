export interface Multimedia {
  id: number;
  url: string;
  extension: string;
  created_at: string;
  updated_at: string;
}

export interface RequestMultimedia {
  url: string;
  extension: string;
}

export interface MultimediaResponse {
  id: number;
  uri: string;
  extension: string;
  created_at: string;
  update_at: string;
}
