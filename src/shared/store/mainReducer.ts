import { combineReducers } from 'redux';
import {userReducer} from "./user/reducer";

export const mainReducer = combineReducers({ user: userReducer });
