import movie1 from "../../../assets/movies/better_call_saul.jpeg";
import movie2 from "../../../assets/movies/deadpool.jpg";
import movie3 from "../../../assets/movies/hardcore.jpg";
import movie4 from "../../../assets/movies/pulp_fiction.jpg";
import movie5 from "../../../assets/movies/shrek.jpg";
import movie6 from "../../../assets/movies/titanic.jpg";
export interface Movie {
  id: number;
  image: string;
  title: string;
  description: string;
}
export const moviesList: Movie[] = [
  {
    id: 1,
    image: movie1,
    title: "movie.title_1",
    description: "movie.description_1",
  },
  {
    id: 2,
    image: movie2,
    title: "movie.title_2",
    description: "movie.description_2",
  },
  {
    id: 3,
    image: movie3,
    title: "movie.title_3",
    description: "movie.description_3",
  },
  {
    id: 4,
    image: movie4,
    title: "movie.title_4",
    description: "movie.description_4",
  },
  {
    id: 5,
    image: movie5,
    title: "movie.title_5",
    description: "movie.description_5",
  },
  {
    id: 6,
    image: movie6,
    title: "movie.title_6",
    description: "movie.description_6",
  },
];

export const defaultSliderSettings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
};
