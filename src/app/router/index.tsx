import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../feature/home-page";

export const Routing = () => {
  return (
    <Routes>
      <Route path={"*"} element={<HomePage />} />
    </Routes>
  );
};
