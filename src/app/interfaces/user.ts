export interface User {
  name: string;
  email: string;
  password: string;
  role_id?: number;
  role?: Role;
}

export interface CreateUserDto extends Omit<User, 'id'>{}
export interface UpdateUserDto extends User {}

export interface Role {
  id: number;
  name: string;
}

export interface Cliente {
  id: number;
  name: string;
  rut:string;
  email: string;
  telephone: string;
  address: string;
  contact: string;
  city: string;
  comuna: string;
  logo: string;
  mostrar_en_principal: number;
}
