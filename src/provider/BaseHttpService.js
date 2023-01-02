import axios from "axios";
import BaseHttpService from "@/provider/BaseHttpService";

const BASE_URL = "http://localhost:3000";
let _accessToken = null;

export default {
  postCtx: (endpoint, data, options = {}) => {
    Object.assign(options, getCommonOption());
    return axios.post(`${BASE_URL}/${endpoint}`, data, options);
  },
  saveToken: (accessToken) => {
    _accessToken = accessToken;
    return localStorage.setItem("accessToken", accessToken);
  },
  loadToken: () => {
    const token = localStorage.getItem("accessToken");
    _accessToken = token;
    return token;
  },
};

const getCommonOption = () => {
  const token = BaseHttpService.loadToken();

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

let acessToken = () => {
  return _accessToken ? _accessToken : BaseHttpService.loadToken();
};

// let loadToken = () => {
//   const token = localStorage.getItem("accessToken");
//   _accessToken = token;
//   return token;
// };

// let removeToken = () => {
//   return localStorage.removeItem("accessToken");
// };
