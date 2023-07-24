import axiosAuthen from "@/axios/axiosAuthen";
import axiosHeader from "@/axios/axiosHeader";
export const editUser = async ({ id, formData }: any) => {
  const response = await axiosHeader.put(`/users/${id}`, formData);
  return response.data;
};
export const uploadAvatar = async (formData: any) => {
  const response = await axiosAuthen.post("/users/upload-avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
