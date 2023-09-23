import { createAction } from "@reduxjs/toolkit";
import { TicketPlace } from "./ticket";
import {
  SET_TICKET_HALL,
  SET_TICKET_MOVIE,
  SET_TICKET_PLACES,
  SET_TICKET_TIME,
} from "../../constants/store";

export const setTicketMovie = createAction<number>(SET_TICKET_MOVIE);
export const setTicketTime = createAction<number>(SET_TICKET_TIME);
export const setTicketHall = createAction<number>(SET_TICKET_HALL);
export const setTicketPlaces = createAction<TicketPlace[]>(SET_TICKET_PLACES);
