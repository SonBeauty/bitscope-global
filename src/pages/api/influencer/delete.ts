import axiosAuthen from "@/axios/axiosAuthen";

export const DeleteInfluencer = async (id: any) => {
  const response = await axiosAuthen.delete(`/influencers/${id}`);
  return response.data;
};
