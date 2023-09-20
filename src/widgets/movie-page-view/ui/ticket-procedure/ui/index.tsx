import React from "react";
import { DatePicker } from "../../../../../features/date-picker";
import "./index.scss";
import { HallPicker } from "../../../../../features/hall-picker";
import { TicketPicker } from "../../../../../features/ticket-picker/ui";

export const TicketProcedure = () => {
  return (
    <div className={"ticket-procedure"}>
      <DatePicker />
      <div className={"ticket-hall-picker"}>
        <HallPicker />
        <TicketPicker />
      </div>
    </div>
  );
};
