import axios from "axios";

const api = axios.create({
  baseURL:process.env.REACT_APP_API_BASE_URL,
  auth: {
    username: process.env.REACT_APP_API_KEY,
    password: process.env.REACT_APP_API_SECRET,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    alert("Server Error");
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
