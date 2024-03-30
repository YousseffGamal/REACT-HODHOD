import axios from 'axios';

const authToken = localStorage.getItem("accessToken");

// if (!authToken && window.location.pathname !== "/login" && !window.location.pathname.startsWith("/resetpassword")) {
//   window.location.href = "/login";
// }

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'authorization': `Bearer ${authToken}`
  },
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`;
    }
    return config;
  }
)

api.interceptors.response.use(
  response => {
    return response;
  }
  , error => {
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
    }
    return error;
  }
)

export default api;
