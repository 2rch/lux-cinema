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
    title: "Better call Saul",
    description:
      "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.",
  },
  {
    id: 2,
    image: movie2,
    title: "Deadpool",
    description:
      "Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name.",
  },
  {
    id: 3,
    image: movie3,
    title: "Hardcore Genry",
    description:
      "Hardcore Henry (also known simply as Hardcore (Russian: Хардкор) in some countries)[5] is a 2015 science fiction action film written and directed by Ilya Naishuller (in his feature directorial debut), and produced by Timur Bekmambetov, Naishuller, Inga Vainshtein Smith and Ekaterina Kononenko.",
  },
  {
    id: 4,
    image: movie4,
    title: "Pulp Fiction",
    description:
      "It tells four intertwining tales of crime and violence in Los Angeles, California.",
  },
  {
    id: 5,
    image: movie5,
    title: "Shrek",
    description:
      "Shrek is a 2001 American computer-animated fantasy comedy film loosely based on the 1990 children's picture book of the same name by William Steig.",
  },
  {
    id: 6,
    image: movie6,
    title: "Titanic",
    description:
      "Titanic is a 1997 American disaster film directed, written, produced, and co-edited by James Cameron.",
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
