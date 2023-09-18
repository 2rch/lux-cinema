import React from "react";
import { MOVIES } from "../../../../constants/api";
import "./index.scss";

interface MovieCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
}
export const MovieCard = (props: MovieCardProps) => {
  const { id, image, title, description } = props;
  return (
    <a className={"movie-card"} href={`${MOVIES}?id=${id}`}>
      <img className={"movie-card-image"} src={image} alt={title} />
      <div className={"movie-card-text"}>{title}</div>
      <div className={"movie-card-description"}>{description}</div>
    </a>
  );
};
