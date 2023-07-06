import axiosAuthen from "@/axios/axiosAuthen";

export const getHistory = async ({ pageParam = 1 }) => {
  const response = await axiosAuthen.get(
    `/bitAuthen/?search=&sort=1&page=${pageParam}&limit=9`
  );
  return response.data;
};
