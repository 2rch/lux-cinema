import React from "react";
import clsx from "clsx";
import "./index.scss";
import { useTranslation } from "react-i18next";

interface PopupProps {
  title: string;
  isOpen: boolean;
  onConfirmClick: () => void;
  onCancelClick: () => void;
  children: React.ReactNode;
}

export const Popup = ({
  title,
  isOpen,
  onConfirmClick,
  onCancelClick,
  children,
}: PopupProps) => {
  const { t } = useTranslation();
  return (
    <div className={clsx("custom-popup", isOpen && "open")}>
      <div className={"custom-popup-header"}>
        <div className={"custom-popup-title"}>{title}</div>
        <button className={"custom-popup-close-button"} onClick={onCancelClick}>
          x
        </button>
      </div>
      <div className={"custom-popup-inner"}>{children}</div>
      <div className={"custom-popup-footer"}>
        <button
          className={"custom-popup-cancel-button"}
          onClick={onCancelClick}
        >
          {t("common.cancel_button")}
        </button>
        <button
          className={"custom-popup-confirm-button"}
          onClick={onConfirmClick}
        >
          {t("common.confirm_button")}
        </button>
      </div>
    </div>
  );
};
