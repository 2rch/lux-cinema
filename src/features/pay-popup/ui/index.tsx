import React from "react";
import { Popup } from "../../../shared/ui/popup/ui";

interface BuyPopupProps {
  isOpen: boolean;
  closePopup: () => void;
  price: number;
}

export const BuyPopup = ({ isOpen, closePopup, price }: BuyPopupProps) => {
  const preparedPrice = (price / 100).toFixed(2);
  const handleConfirmClick = () => {
    closePopup();
  };

  return (
    <Popup
      title={"Purchase confirmation"}
      isOpen={isOpen}
      onCancelClick={closePopup}
      onConfirmClick={handleConfirmClick}
    >
      <div className={"buy-popup"}>
        Are you sure you want to purchase selected tickets by {preparedPrice}{" "}
        UAH?
      </div>
    </Popup>
  );
};
