import axiosAuthen from "@/axios/axiosAuthen";

export const GetInfluencer = async () => {
  const response = await axiosAuthen.get("/influencers");
  return response.data;
};
