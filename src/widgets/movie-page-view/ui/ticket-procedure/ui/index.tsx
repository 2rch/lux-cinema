import React, { useState } from "react";
import { DatePicker } from "../../../../../features/date-picker";
import "./index.scss";
import { HallPicker } from "../../../../../features/hall-picker";
import { TicketPicker } from "../../../../../features/ticket-picker";
import { TicketBuyPreview } from "../../../../../features/ticket-buy-preview";
import { TicketPlace } from "../../../../../shared/store/ticket/ticket";
import { BuyPopup } from "../../../../../features/pay-popup";

export const TicketProcedure = () => {
  const [price, setPrice] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleBuyTicketClick = (tickets: TicketPlace[]) => {
    setPrice(tickets.reduce((price, tickets) => price + tickets.price, 0));
    setIsPopupOpen(true);
  };
  return (
    <div className={"ticket-procedure"}>
      <DatePicker />
      <div className={"ticket-hall-picker"}>
        <HallPicker />
        <TicketPicker />
      </div>
      <TicketBuyPreview onBuyClick={handleBuyTicketClick} />
      <BuyPopup
        isOpen={isPopupOpen}
        closePopup={() => setIsPopupOpen(false)}
        price={price}
      />
    </div>
  );
};
