import axios from "axios";
const axiosAuthen = axios.create({
  baseURL: process.env.SERVER,
  timeout: 1000000,
  headers: {
    gzip: true,
    "Content-Type": "application/json",
  },
  maxContentLength: 100000000,
  maxBodyLength: 1000000000,
});
axiosAuthen.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosAuthen;
