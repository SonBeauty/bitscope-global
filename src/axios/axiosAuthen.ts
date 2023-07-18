import axios from "axios";
const THREE_MINUTES_TO_SECONDS = 180000;
const axiosAuthen = axios.create({
  baseURL: process.env.SERVER,
  timeout: THREE_MINUTES_TO_SECONDS,
  headers: {
    gzip: true,
    "Content-Type": "application/json",
  },
  maxContentLength: THREE_MINUTES_TO_SECONDS,
  maxBodyLength: THREE_MINUTES_TO_SECONDS,
});
axiosAuthen.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") ?? sessionStorage.getItem("token");
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
