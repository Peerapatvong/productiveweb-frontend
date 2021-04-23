import axios from "axios";
import { clearToken, getToken } from "../components/services/localStorageService";
axios.defaults.baseURL = "http://localhost:8000/";
axios.interceptors.request.use(
  (config) => {
    if (getToken()) config.headers.authorization = `Bearer ${getToken()}`;
    return config;
  },
  (err) => Promise.reject(err)
);

export default axios;
