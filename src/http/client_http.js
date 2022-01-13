import axios from 'axios';

const httpAxios = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
});

export default httpAxios;
