import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8888/api",
  //withCredentials: true, //세션 전달->보안 필요없으면 생략 가능->백엔드 설정 없으면 에러
});

export default api;
