import axiosHeader from "@/axios/axiosHeader";
export const editUser = async ({ id, formData }: any) => {
  const response = await axiosHeader.put(`/users/${id}`, formData);
  return response.data;
};
