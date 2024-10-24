import { Roles } from "./roles";

export interface UserInfo {
    name: string | null;
    email: string | null;
    rol: Roles | null;
  }