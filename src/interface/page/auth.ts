export interface RegisterProps {
  name: string;
  email: string;
  password: string;
}
export interface LoginProps {
  email: string;
  password: string;
}
export interface UserProps {
  createdAt: string;
  deleted: boolean;
  email: string;
  isActive: boolean;
  name: string;
  role: string;
}
