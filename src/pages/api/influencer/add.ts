import axiosAuthen from "@/axios/axiosAuthen";

export const addInfluencer = async (username: any) => {
  const response = await axiosAuthen.post("/influencers", username);
  return response.data;
};
