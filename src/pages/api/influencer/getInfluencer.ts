import axiosAuthen from "@/axios/axiosAuthen";

export const GetInfluencer = async (params: any) => {
  const response = await axiosAuthen.get(
    `/influencers?page=${params.page}&limit=${params.limit}`
  );

  return response.data;
};
