import axiosAuthen from "@/axios/axiosAuthen";

export const getHistory = async ({ pageParam = 1 }) => {
  const response = await axiosAuthen.get(
    `/bitAuthen/?search=&sort=1&page=${pageParam}&limit=10`
  );
  return response.data;
};

export const deleteHistory = async (id: string) => {
  const response = await axiosAuthen.delete(`/bitAuthen/${id}`);
  return response.data;
};
