import { createSlice } from "@reduxjs/toolkit";
import { TicketPlace } from "./ticket";
import {
  setTicketPlaces,
  setTicketHall,
  setTicketMovie,
  setTicketTime,
} from "./actions";

interface InitialState {
  movieId: null | number;
  time: null | number;
  hall: number;
  places: TicketPlace[];
}

const initialState: InitialState = {
  movieId: null,
  time: null,
  hall: 1,
  places: [],
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: {
    [setTicketMovie.type]: (state, action) => {
      state.movieId = action.payload;
    },
    [setTicketTime.type]: (state, action) => {
      state.time = action.payload;
    },
    [setTicketHall.type]: (state, action) => {
      state.hall = action.payload;
    },
    [setTicketPlaces.type]: (state, action) => {
      state.places = action.payload;
    },
  },
});

export const ticketReducer = ticketSlice.reducer;
