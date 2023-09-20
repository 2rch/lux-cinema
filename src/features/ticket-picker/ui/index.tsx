import React, { useEffect, useState } from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import { selectTicketHall } from "../../../shared/store/ticket/selectors";
import { CinemaHall, cinemaHalls } from "../../hall-picker/config";
export const TicketPicker = () => {
  const [currentHall, setCurrentHall] = useState<CinemaHall | null>(null);
  const currentHallId = useSelector(selectTicketHall);
  useEffect(() => {
    const hall = cinemaHalls.find((hall) => hall.id === currentHallId);
    hall && setCurrentHall(hall);
  }, [currentHallId]);

  return (
    <div className={"ticket-picker"}>
      <div className={"ticket-picker-text"}>{currentHall?.description}</div>
    </div>
  );
};
