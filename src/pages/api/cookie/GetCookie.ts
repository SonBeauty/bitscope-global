import axiosAuthen from "@/axios/axiosAuthen";
import { UpdateCookieProp } from "@/interface/page/auth";

export const GetCookie = async (params: any) => {
  const response = await axiosAuthen.get(
    `/cookie?status=${params.status}&page=${params.page}&limit=${params.limit}`
  );
  return response.data;
};
export const CreateCookie = async (formData: any) => {
  const response = await axiosAuthen.post(`/cookie`, formData);
  return response.data;
};
export const DeleteCookie = async (data: any) => {
  const response = await axiosAuthen.delete(`/cookie/${data}`);
  return response.data;
};

export const UpdateCookie = async (formUpdate: UpdateCookieProp) => {
  const response = await axiosAuthen.put(
    `/cookie/${formUpdate.id}`,
    formUpdate
  );
  return response.data;
};
