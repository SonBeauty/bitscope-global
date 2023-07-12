import axiosInstance from "@/axios";
export const reSendEmail = async (email: string) => {
  const response = await axiosInstance.post("/auth/re-active", {
    email: email,
  });
  return response.data;
};