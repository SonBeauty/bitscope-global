export interface RegisterProps {
  name: string;
  email: string;
  password: string;
  referralCode?: string;
}
export interface LoginProps {
  email: string;
  password: string;
}

export interface ForgotProps {
  email: string;
}
export interface CreateProxyProp {
  proxy: string;
}
export interface DeleteProxyProp {
  id: string;
}
export interface UpdateProxyProp {
  id: string;
  value?: string;
  status?: number;
}
export interface DeleteCookieProp {
  id: string;
}
export interface UpdateCookieProp {
  id: string;
  cookie?: string;
  token?: string;
  csrfToken?: string;
  status?: number;
}
export interface UserProps {
  _id: string;
  createdAt: string;
  deleted: boolean;
  email: string;
  isActive: boolean;
  name: string;
  role: string;
  username?: string;
  phone?: string;
  avatar?: string;
}
