import axiosInstance from "@/axios";
export const Subscribe = async (email: string) => {
  const response = await axiosInstance.post("/subscribe", {
    email: email,
  });
  return response.data;
};
