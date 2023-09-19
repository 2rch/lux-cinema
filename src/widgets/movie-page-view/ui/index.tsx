import React from "react";
import { MovieView } from "../../../features/movie-view";
import { TicketProcedure } from "./ticket-procedure";
import "./index.scss";

export const MoviePageView = () => {
  return (
    <div className={"movie-page-inner"}>
      <MovieView />
      <TicketProcedure />
    </div>
  );
};
