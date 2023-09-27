import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { CarouselElement, carouselElements } from "../config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.scss";
import { useTranslation } from "react-i18next";

export const Carousel = () => {
  const { t } = useTranslation();
  return (
    <ResponsiveCarousel interval={3000} autoPlay infiniteLoop>
      {carouselElements.map((element: CarouselElement) => (
        <div className={"carousel-element"} key={t(element.title)}>
          <img
            className={"carousel-element-image"}
            src={element.image}
            alt={t(element.title)}
          />
          <div className={"carousel-element-text"}>{t(element.title)}</div>
        </div>
      ))}
    </ResponsiveCarousel>
  );
};
