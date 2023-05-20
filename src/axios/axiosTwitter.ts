import axios from "axios";
const axiosTwitter = axios.create({
  baseURL: process.env.TWITTER,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosTwitter;