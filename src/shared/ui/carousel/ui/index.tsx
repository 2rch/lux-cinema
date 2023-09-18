import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { CarouselElement, carouselElements } from "../config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.scss";

export const Carousel = () => {
  return (
    <ResponsiveCarousel interval={1500} autoPlay>
      {carouselElements.map((element: CarouselElement) => (
        <div className={"carousel-element"} key={element.title}>
          <img
            className={"carousel-element-image"}
            src={element.image}
            alt={element.title}
          />
          <div className={"carousel-element-text"}>{element.title}</div>
        </div>
      ))}
    </ResponsiveCarousel>
  );
};
