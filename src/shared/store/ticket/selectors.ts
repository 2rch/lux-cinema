import { RootState } from "../store";

export const selectTicketMovie = (state: RootState) => state.ticket.movieId;
export const selectTicketTime = (state: RootState) => state.ticket.time;
export const selectTicketHall = (state: RootState) => state.ticket.hall;
export const selectTicketPlaces = (state: RootState) => state.ticket.places;
