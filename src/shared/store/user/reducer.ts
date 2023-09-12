import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllLanguages } from './thunks';
import {
  removeUserToken,
  setError,
  setUserData,
  setUserToken,
  updateLanguage,
} from './actions';
import { UserData } from './user';

interface InitialState {
  userData: UserData;
  isLanguagesLoading: boolean;
  languages: string[];
  token: null | string;
  error: null | string;
}

const initialState: InitialState = {
  userData: {
    id: '0000-00000000-0000',
    type: 'user',
    attributes: {
      first_name: '',
      middle_name: '',
      last_name: '',
      language: 'english'
    }
  },
  isLanguagesLoading: false,
  languages: [],
  token: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllLanguages.pending.type]: (state: InitialState) => {
      state.isLanguagesLoading = true;
    },
    [getAllLanguages.fulfilled.type]: (
      state: InitialState,
      action: PayloadAction<string[]>
    ) => {
      state.isLanguagesLoading = false;
      state.languages = action.payload;
    },
    [getAllLanguages.rejected.type]: (
      state: InitialState,
      action: PayloadAction<string>
    ) => {
      state.isLanguagesLoading = false;
      state.error = action.payload;
    },
    [setUserData.type]: (
      state: InitialState,
      action: PayloadAction<UserData>
    ) => {
      state.userData = action.payload;
      if (action.payload?.attributes?.language === null) {
        state.userData.attributes.language = 'english';
      }
    },
    [setUserToken.type]: (
      state: InitialState,
      action: PayloadAction<string>
    ) => {
      state.token = action.payload;
    },
    [removeUserToken.type]: (state: InitialState) => {
      state.token = null;
    },
    [setError.type]: (
      state: InitialState,
      action: PayloadAction<string | null>
    ) => {
      state.error = action.payload;
    },
    [updateLanguage.type]: (
      state: InitialState,
      action: PayloadAction<string>
    ) => {
      state.userData = {
        ...state.userData,
        attributes: { ...state.userData.attributes, language: action.payload },
      };
    },
  },
});

export const userReducer = userSlice.reducer;
