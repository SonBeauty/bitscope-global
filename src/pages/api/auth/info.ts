import axiosHeader from "@/axios/axiosHeader";
export const infoUser = async () => {
  const response = await axiosHeader.get("/auth");
  return response.data;
};
