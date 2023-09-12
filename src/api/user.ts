import axios from 'axios';
import {API_URL, LANGUAGES} from "../shared/constants/api";

export const getLanguages = () => {
  return axios.get(`${API_URL}${LANGUAGES}`);
};