import axiosAuthen from "@/axios/axiosAuthen";

export const getReferral = async () => {
  const response = await axiosAuthen.get(`/referral`);
  return response.data;
};
