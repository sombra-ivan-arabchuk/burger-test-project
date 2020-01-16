import axios, { AxiosRequestConfig } from 'axios';

const nutritionAPI = axios.create({
  baseURL: 'https://api.nutritionix.com/v1_1/',
  timeout: 1000,
  headers: { 'Content-type': 'application/json' },
});

nutritionAPI.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.params = config.params || {};
    config.params.appId = process.env.REACT_APP_NUTRITION_ID;
    config.params.appKey = process.env.REACT_APP_NUTRITION_KEY;
    return config;
  },
);

export default nutritionAPI;
