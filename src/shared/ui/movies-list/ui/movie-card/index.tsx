import React from "react";
import { MOVIES } from "../../../../constants/api";
import "./index.scss";
import { useTranslation } from "react-i18next";

interface MovieCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
}
export const MovieCard = (props: MovieCardProps) => {
  const { t } = useTranslation();
  const { id, image, title, description } = props;

  return (
    <a className={"movie-card"} href={`${MOVIES}?id=${id}`}>
      <img className={"movie-card-image"} src={image} alt={t(title)} />
      <div className={"movie-card-text"}>{t(title)}</div>
      <div className={"movie-card-description"}>{t(description)}</div>
    </a>
  );
};
