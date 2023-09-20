import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { ticketReducer } from "./ticket/reducers";

export const mainReducer = combineReducers({
  user: userReducer,
  ticket: ticketReducer,
});
