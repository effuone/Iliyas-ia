import axios from "axios";

export const BASE_URL = 'http://localhost:5001/api';

export const axiosApiInstance = axios.create({
  baseURL: BASE_URL
});