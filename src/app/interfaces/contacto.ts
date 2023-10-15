import { Cliente } from './user';
import { Category } from './categories';

export interface CreateContacto {
  name:string;
  rut:string;
  telephone: string;
  email: string;
  address: string;
  category_id: string;
  tipo_contacto: string;
  comments: string;
}

export interface UpdateContacto extends Partial<CreateContacto>{}

export interface Solicitud {
  id: number;
  comments: string;
  status: 0,
  tipo_contacto: string;
  created_at: string;
  update_at: string;
  category: Category,
  client: Cliente
}
