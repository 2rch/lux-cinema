import React from "react";
import mainLogo from "../../../../assets/logo.png";
import "./index.css";

export const HeaderLogo = () => (
  <a href={"/"}>
    <img className={"header-logo"} src={mainLogo} alt={"LUX"} />
  </a>
);
