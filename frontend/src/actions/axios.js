import axios from "axios";

const LOCAL_HOST = "http://localhost:8002/api/v1";
const PROD_URL = "https://api.mithraenterprises.in";

const HOST = "https://vjp-backend-host.onrender.com/api/v1";

export const axiosInstance = axios.create({
  baseURL: PROD_URL,
  withCredentials: true,
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false,
  // }),
});

// "proxy": "http://vjpenterprises.in/api/v1",
