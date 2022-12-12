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
