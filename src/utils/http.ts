import axios from "axios";

const httpInstance = axios.create({
  baseURL: "http://geek.itheima.net",
  timeout: 5000,
});

// 拦截器
httpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

httpInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { httpInstance };
