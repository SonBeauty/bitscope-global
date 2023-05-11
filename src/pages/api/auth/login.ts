import axiosInstance from "@/axios";
import { LoginProps } from "@/interface/page/auth";
export const loginUser = async (formData: LoginProps) => {
  const response = await axiosInstance.post("/auth/login", formData);
  return response.data;
};
