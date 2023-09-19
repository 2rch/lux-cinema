import React from "react";
import { PageLayout } from "../../shared/ui/page-layout";
import { MoviePageView } from "../../widgets/movie-page-view";

export const MoviesPage = () => {
  return (
    <PageLayout className={"movie-page"}>
      <MoviePageView />
    </PageLayout>
  );
};
