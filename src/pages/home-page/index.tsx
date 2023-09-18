import React from "react";
import "./index.css";
import { Header } from "../../shared/ui/header";
import { PageLayout } from "../../shared/ui/page-layout";
import { Footer } from "../../shared/ui/footer/ui";
import { Carousel } from "../../shared/ui/carousel";
import { MoviesList } from "../../shared/ui/movies-list";

export const HomePage = () => {
  return (
    <PageLayout className={"home-page"}>
      <Header />
      <Carousel />
      <MoviesList />
      <Footer />
    </PageLayout>
  );
};
