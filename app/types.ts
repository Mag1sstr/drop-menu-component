interface IDropMenu {
  title: string;
  path: string;
  children?: IDropMenu[];
}
export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  role: "customer" | "admin";
  avatar: string;
}
