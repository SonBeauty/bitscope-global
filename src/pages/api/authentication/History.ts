import axiosAuthen from "@/axios/axiosAuthen";

export const getHistory = async (params: any) => {
  const response = await axiosAuthen.get(
    `/bitAuthen/?search=&sort=${params.sort}&page=${params.page}&limit=${params.limit}`
  );
  return response.data;
};
