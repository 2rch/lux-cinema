import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { IconLinks } from "../../icon-links";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={"footer"}>
      <div className={"footer-text"}>
        {t("common.footer.title", { currentYear: new Date().getFullYear() })}
      </div>
      <IconLinks />
    </footer>
  );
};
