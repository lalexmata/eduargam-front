import {User} from "./user";

export interface Credentials {
  email: string;
  password: string;
}

export interface Login {
  user?: User;
  token: string;
}
