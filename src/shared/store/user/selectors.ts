import { RootState } from "../store";

export const selectUserData = (state: RootState) => state.user.userData;
export const selectToken = (state: RootState) => state.user.token;
export const selectError = (state: RootState) => state.user.error;
export const selectLanguages = (state: RootState) => state.user.languages;
