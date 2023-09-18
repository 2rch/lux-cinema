import React from "react";
import "./index.scss";

export const Footer = () => {
  return (
    <footer className={"footer"}>
      Copyright by Alex Turchynov (2022 - {new Date().getFullYear()})
    </footer>
  );
};
