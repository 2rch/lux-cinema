import React from "react";
import logo from "../../shared/assets/logo.svg";
import { useTranslation } from "react-i18next";
export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Site title is {t("common.title")}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};
