import axios from "axios";

const BASE_URL = "http://localhost:3000";
let _accessToken = null;

export default {
  postCtx: (endpoint, data, options = {}) => {
    Object.assign(options, getCommonOption());
    return axios.post(`${BASE_URL}/${endpoint}`, data, options);
  },
  loadToken: (accessToken) => {
    _accessToken = accessToken;
    return localStorage.setItem("accessToken", accessToken);
  },
};

const getCommonOption = () => {
  const token = loadToken();

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

let acessToken = () => {
  return _accessToken ? _accessToken : loadToken();
};

let loadToken = () => {
  const token = localStorage.getItem("accessToken");
  _accessToken = token;
  return token;
};

// let removeToken = () => {
//   return localStorage.removeItem("accessToken");
// };
