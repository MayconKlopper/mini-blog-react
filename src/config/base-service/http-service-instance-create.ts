import axios from 'axios';

const httpServiceInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'content-type': 'application/json',
    'access-control-allow-origin': import.meta.url.split('/src')[0]
  }
});

export default httpServiceInstance;