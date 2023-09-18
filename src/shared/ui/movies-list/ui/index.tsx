import React from "react";
import { defaultSliderSettings, Movie, moviesList } from "../config";
import { MovieCard } from "./movie-card";
import Slider from "react-slick";
import "./index.scss";

export const MoviesList = () => {
  return (
    <Slider className={"movies-list"} {...defaultSliderSettings}>
      {moviesList.map((movie: Movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Slider>
  );
};
