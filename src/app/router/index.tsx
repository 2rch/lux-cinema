import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../features/home-page";

export const Routing = () => {
  return (
    <Routes>
      <Route path={"*"} element={<HomePage />} />
    </Routes>
  );
};
