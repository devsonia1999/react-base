import axios from "axios";

const naverApi = axios.create({
  baseURL: "/v1",
  headers: {
    "Content-Type": "application/json",
    "X-Naver-Client-Id": import.meta.env.VITE_NAVER_CLIENT_ID,
    "X-Naver-Client-Secret": import.meta.env.VITE_NAVER_CLIENT_SECRET,
  },
});

export default naverApi;