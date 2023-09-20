import React, { useEffect } from "react";
import { getCurrentMovie } from "../lib";
import { additionalDescription } from "../config";
import "./index.scss";
import { useAppDispatch } from "../../../shared/store/store";
import { setTicketMovie } from "../../../shared/store/ticket/actions";

export const MovieView = () => {
  const currentMovie = getCurrentMovie();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentMovie) {
      dispatch(setTicketMovie(currentMovie.id));
    }
  }, [currentMovie]);

  if (currentMovie) {
    const { title, image, description } = currentMovie;
    return (
      <div className={"movie-view"}>
        <div className={"movie-view-top"}>
          <img className={"movie-view-image"} src={image} alt={title} />
          <div className={"movie-view-title"}>{title}</div>
        </div>
        <div className={"movie-view-description"}>{description}</div>
        <div className={"movie-view-description"}>{additionalDescription}</div>
      </div>
    );
  }

  //TODO Connect 404 error
  return null;
};
