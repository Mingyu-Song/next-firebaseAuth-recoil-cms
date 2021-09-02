import axios from "axios";
const BASEURL = "/";

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthHeader = (token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `${token}`;
  }
};

export const unsetAuthHeader = () => {
  delete instance.defaults.headers.common["Authorization"];
};

const api = {
  queries: {
    myorder: async () => {
      const { data } = await instance.get("/api/order");
      return data;
    },
  },
  mutations: {
    order: async (params) => {
      const { data } = await instance.post("/api/order", params);
      return data;
    },
  },
};

export default api;
