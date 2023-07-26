import axiosAuthen from "@/axios/axiosAuthen";

export const GetInfluencer = async (params?: any) => {
  const { page = 1, limit = 100 } = params;
  const response = await axiosAuthen.get(
    `/influencers?page=${page}&limit=${limit}`
  );

  return response.data;
};
export const GetTweet = async (params?: any) => {
  const { page = 1, limit = 10 } = params;
  const response = await axiosAuthen.get(`/tweet?page=${page}&limit=${limit}`);

  return response.data;
};

export const GetDashboard = async (params?: any) => {
  const { page = 1, limit = 10 } = params;
  const response = await axiosAuthen.get(
    `/dashboard?page=${page}&limit=${limit}`
  );

  return response.data;
};
