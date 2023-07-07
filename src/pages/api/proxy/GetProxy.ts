import axiosAuthen from "@/axios/axiosAuthen";
import {
  CreateProxyProp,
  DeleteProxyProp,
  UpdateProxyProp,
} from "@/interface/page/auth";

export const getProxy = async (params: any) => {
  const response = await axiosAuthen.get(
    `/proxy?status=${params.status}&page=${params.page}&limit=${params.limit}`
  );
  return response.data;
};
export const CreateProxy = async (formData: any) => {
  const response = await axiosAuthen.post(`/proxy`, formData);
  return response.data;
};
export const DeleteProxy = async (data: DeleteProxyProp) => {
  const response = await axiosAuthen.delete(`/proxy/${data.id}`);
  return response.data;
};

export const UpdateProxy = async (formUpdate: UpdateProxyProp) => {
  const response = await axiosAuthen.put(`/proxy/${formUpdate.id}`, formUpdate);
  return response.data;
};
