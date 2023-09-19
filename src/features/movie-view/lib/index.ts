import { moviesList } from "../../../shared/ui/movies-list";
import { useSearchParams } from "react-router-dom";

export const getCurrentMovie = () => {
  const [queryParams] = useSearchParams();
  const id = queryParams.get("id");

  if (id) {
    return getCurrentMovieById(Number(id));
  }

  return null;
};

const getCurrentMovieById = (id: number) => {
  const currentMovie = moviesList.find((movie) => movie.id === id);

  if (!currentMovie) {
    return null;
  }

  return currentMovie;
};
