import React from "react";
import { TicketPlace } from "../../../../shared/store/ticket/ticket";
import "./index.scss";

export const TicketView = ({ row, place, price }: TicketPlace) => {
  const preparedPrice = (price / 100).toFixed(2);
  return (
    <div className={"ticket-view"}>
      <div className={"ticket-view-row"}>{`Row: ${row}`}</div>
      <div className={"ticket-view-place"}>{`Place: ${place}`}</div>
      <div className={"ticket-view-price"}>{`Price: ${preparedPrice} UAH`}</div>
    </div>
  );
};
