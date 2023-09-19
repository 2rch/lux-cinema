import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { MovieView } from "../../features/movie-view";

export const MoviesPage = () => {
  return (
    <PageLayout className={"home-page"}>
      <MovieView />
    </PageLayout>
  );
};
