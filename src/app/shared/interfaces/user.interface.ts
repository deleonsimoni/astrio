export interface User {
  _id: string;
  fullname: string;
  createdAt: string;
  roles: string[];
  isAdmin: boolean;
  phone: string;
  dateBirth: Date;
}
