/* eslint-disable indent */
import axios from 'axios';

axios.defaults.baseURL = 'https://skillkamp-api.com/v1/api';


// Add a request interceptor to include the token in requests
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Add a response interceptor to handle token expiration errors
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);


export default axios;
