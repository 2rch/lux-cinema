import React from "react";
import "./index.scss";

interface HeaderButtonProps {
  title: string;
  icon: string;
  link: string;
  additionalClass?: string;
}

export const HeaderButton = (props: HeaderButtonProps) => (
  <a
    className={`header-button ${props.additionalClass ?? ""}`}
    href={props.link}
  >
    <img className={"header-button-icon"} src={props.icon} alt={props.title} />
    <div className={"header-button-text"}>{props.title}</div>
  </a>
);
