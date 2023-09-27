import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={"footer"}>
      {t("common.footer.title", { currentYear: new Date().getFullYear() })}
    </footer>
  );
};
