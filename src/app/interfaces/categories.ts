

export interface RequestCategory {
  id?: number;
  name: string;
  type: string;
  slug: string;
  image: string;
  description: string;
}
export interface Category extends Partial<RequestCategory>{}
export interface RequestUpdateCategory {
  name?: string;
  type?: string;
  slug?: string;
  image?: string;
  description?: string;
}

export interface ResponseCategory {

}
