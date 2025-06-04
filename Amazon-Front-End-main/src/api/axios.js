import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/fir-d7510/us-central1/api",
  // baseURL: "http://localhost:5000",

  // deployed version of amazon server on render.com
  baseURL: "https://amazon-backend-pzms.onrender.com",
});
export { axiosInstance };
