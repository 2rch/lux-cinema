import {
  AUTH_REFRESH,
  AUTH_VERIFY,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from '../shared/constants/api';
import axios from 'axios';
import {API_URL} from "../shared/constants/api";

export const loginUser = (login: string, password: string) => {
  return axios.post(`${API_URL}${AUTH_LOGIN}`, {
    data: {
      type: 'login',
      attributes: {
        login: login,
        password: password
      }
    }
  })
};

export const logoutUser = () => {
  return axios.get(`${API_URL}${AUTH_LOGOUT}`);
};

export const refreshUserToken = (token: string) => {
  return axios.post(`${API_URL}${AUTH_REFRESH}`, {
    data: {
      type: 'refresh',
      attributes: {
        access_token: token,
      },
    },
  });
};

export const checkUserToken = (token: string) => {
  return axios.get(
    `${process.env.REACT_APP_IAM_URL}${AUTH_VERIFY}?token=${token}`
  );
};
