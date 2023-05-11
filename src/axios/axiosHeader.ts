import axios from "axios";
const axiosHeader = axios.create({
  baseURL: process.env.SERVER,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosHeader.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.bearer = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosHeader;
