import React from "react";
import logo from "../../shared/assets/logo.png";
import { useTranslation } from "react-i18next";
import "./index.css";
export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{t("common.title")}</p>
      <a
        className="App-link"
        href="https://github.com/2rch/react-boilerplate-2023"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Boilerplate 2023
      </a>
    </header>
  );
};
