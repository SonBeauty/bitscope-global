import axiosAuthen from "@/axios/axiosAuthen";

export const addInfluencer = async (username: string) => {
  const response = await axiosAuthen.post("/influencer", username);
  return response.data;
};