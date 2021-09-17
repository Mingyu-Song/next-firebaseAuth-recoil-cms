import axios from 'axios';
const BASEURL = '/';

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthHeader = (token) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `${token}`;
  }
};

export const unsetAuthHeader = () => {
  delete instance.defaults.headers.common['Authorization'];
};
