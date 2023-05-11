import axios from "axios";
const axiosAuthentication = axios.create({
  baseURL: process.env.SERVER,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosAuthentication.interceptors.request.use(
  async (config) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.bearer = token;
    }
    const { data } = await axios.post("/auth", { token });
    if (data.status !== "success") {
      throw new Error("User not authenticated");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosAuthentication;
