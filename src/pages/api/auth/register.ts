import axiosInstance from "@/axios";
import { RegisterProps } from "@/interface/page/auth";
export const registerUser = async (userData: RegisterProps) => {
  const response = await axiosInstance.post("/auth/signup", userData);
  return response.data;
};
