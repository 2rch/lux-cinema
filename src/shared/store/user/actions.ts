import {
  SET_TOKEN,
  REMOVE_TOKEN,
  SET_ERROR,
  SET_USER_DATA,
  SET_LANGUAGE,
} from "../../constants/store";
import { createAction } from "@reduxjs/toolkit";
import { UserData } from "./user";

export const setUserData = createAction<UserData>(SET_USER_DATA);
export const setUserToken = createAction<string>(SET_TOKEN);
export const removeUserToken = createAction(REMOVE_TOKEN);
export const setError = createAction<string | null>(SET_ERROR);
export const updateLanguage = createAction<string>(SET_LANGUAGE);
