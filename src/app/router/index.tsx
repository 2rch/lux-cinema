import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/home-page";
import { MOVIES } from "../../shared/constants/api";
import { MoviesPage } from "../../pages/movies-page";

export const Routing = () => {
  return (
    <Routes>
      <Route path={MOVIES} element={<MoviesPage />} />
      <Route path={"*"} element={<HomePage />} />
    </Routes>
  );
};
