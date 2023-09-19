import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { Carousel } from "../../shared/ui/carousel";
import { MoviesList } from "../../shared/ui/movies-list";

export const HomePage = () => {
  return (
    <PageLayout className={"home-page"}>
      <Carousel />
      <MoviesList />
    </PageLayout>
  );
};
