import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { mainReducer } from './mainReducer';

export const store = configureStore({
  reducer: mainReducer,
});

export type RootState = ReturnType<typeof store.getState>;

type AppState = ReturnType<typeof mainReducer>;

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();
