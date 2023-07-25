import axiosInstance from "@/axios";
import { ForgotProps } from "@/interface/page/auth";
export const ForgotPw = async (formData: ForgotProps) => {
  const response = await axiosInstance.post("/auth/forgot", formData);
  return response.data;
};
