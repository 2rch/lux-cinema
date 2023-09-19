import React from "react";
import { getCurrentMovie } from "../lib";
import { additionalDescription } from "../config";
import "./index.scss";

export const MovieView = () => {
  const currentMovie = getCurrentMovie();

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
