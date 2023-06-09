import axiosAuthen from "@/axios/axiosAuthen";
import { Authentication } from "@/interface/page/Authentication";
export const getUserAuthen = async (formData: Authentication) => {
  const response = await axiosAuthen.post("/bitAuthen", formData);
  return response.data;
};
export const getInfoAuthen = async (id: string) => {
  const response = await axiosAuthen.get(`/bitAuthen/${id}`);
  return response.data;
};
