import React from "react";
import { leftHeaderButtons, loginButton, logoutButton } from "../config";
import { HeaderButton } from "./header-button";
import { useSelector } from "react-redux";
import { selectToken } from "../../../store/user/selectors";
import { HeaderLogo } from "./header-logo";
import "./index.scss";
import { LanguageSelect } from "./language-select";

export const Header = () => {
  const userToken = useSelector(selectToken);
  const lastButton = userToken ? logoutButton : loginButton;
  return (
    <header className={"header"}>
      <div className={"header-left"}>
        <HeaderLogo />
        {leftHeaderButtons.map((button, i) => (
          <HeaderButton key={i} {...button} />
        ))}
      </div>
      <div className={"header-right"}>
        <LanguageSelect />
        <HeaderButton {...lastButton} additionalClass={"header-button-right"} />
      </div>
    </header>
  );
};
