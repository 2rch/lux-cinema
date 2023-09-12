import { getErrorText } from '../../helpers/getErrorText';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLanguages } from '../../../api/user';
import {
  logoutUser as logoutUserRequest,
} from '../../../api/auth';

export const getAllLanguages = createAsyncThunk(
  'user/getLanguages',
  async (_, thunkAPI) => {
    try {
      const response = await getLanguages();
      if (response?.data?.data?.length) {
        return response.data.data;
      }
      return [];
    } catch (e) {
      return thunkAPI.rejectWithValue(getErrorText(e as Error));
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const response = await logoutUserRequest();
      if (response.request.status !== 401) {
        localStorage.removeItem('token');
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(getErrorText(e as Error));
    }
  }
);
