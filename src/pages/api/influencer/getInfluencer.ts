import axiosAuthen from "@/axios/axiosAuthen";

export const getInfluencer = async () => {
  const response = await axiosAuthen.get("/influencers?limit=100");
  return response.data;
};
