import React from "react";
import { useSelector } from "react-redux";
import {
  selectTicketPlaces,
  selectTicketTime,
} from "../../../shared/store/ticket/selectors";
import { TicketView } from "./ticket-view";
import "./index.scss";
import { TicketPlace } from "../../../shared/store/ticket/ticket";

interface TicketBuyPreviewProps {
  onBuyClick: (tickets: TicketPlace[]) => void;
}

export const TicketBuyPreview = ({ onBuyClick }: TicketBuyPreviewProps) => {
  const selectedTime = useSelector(selectTicketTime);
  const selectedTickets = useSelector(selectTicketPlaces);
  const selectedTicketsRawPrice = selectedTickets.reduce(
    (sum, ticket) => sum + ticket.price,
    0,
  );
  const selectedTicketsPrice = (selectedTicketsRawPrice / 100).toFixed(2);
  return (
    <div>
      <div className={"ticket-buy-preview"}>
        {selectedTickets.map((ticket) => (
          <TicketView key={`${ticket.row} ${ticket.place}`} {...ticket} />
        ))}
      </div>
      {selectedTickets.length > 0 && (
        <div className={"ticket-buy-total"}>
          <div className={"ticket-buy-text"}>{selectedTicketsPrice} UAH</div>
          <button
            className={"ticket-buy-button"}
            onClick={() => onBuyClick(selectedTickets)}
            disabled={selectedTime === null}
          >
            Buy
          </button>
        </div>
      )}
    </div>
  );
};
