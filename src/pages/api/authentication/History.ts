import axiosHeader from "@/axios/axiosHeader";

export const getHistory = async (params: any) => {
  const response = await axiosHeader.get(
    `/bitAuthen/?search=&sort=${params.sort}&page=${params.page}&limit=${params.limit}`
  );
  return response.data;
};