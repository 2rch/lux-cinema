import React from "react";
import { leftHeaderButtons, loginButton, logoutButton } from "../config";
import { HeaderButton } from "./header-button";
import { useSelector } from "react-redux";
import { selectToken } from "../../../../store/user/selectors";
import "./index.css";
import { HeaderLogo } from "./header-logo";

export const HeaderView = () => {
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
      <HeaderButton {...lastButton} additionalClass={"header-button-right"} />
    </header>
  );
};
