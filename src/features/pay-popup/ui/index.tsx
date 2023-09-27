import React from "react";
import { Popup } from "../../../shared/ui/popup";
import { useTranslation } from "react-i18next";

interface BuyPopupProps {
  isOpen: boolean;
  closePopup: () => void;
  price: number;
}

export const BuyPopup = ({ isOpen, closePopup, price }: BuyPopupProps) => {
  const { t } = useTranslation();
  const preparedPrice = (price / 100).toFixed(2);
  const handleConfirmClick = () => {
    closePopup();
  };

  return (
    <Popup
      title={t("buy_popup.title")}
      isOpen={isOpen}
      onCancelClick={closePopup}
      onConfirmClick={handleConfirmClick}
    >
      <div className={"buy-popup"}>
        {t("buy_popup.confirmation", {
          price: t("common.price_with_currency", { price: preparedPrice }),
        })}
      </div>
    </Popup>
  );
};
