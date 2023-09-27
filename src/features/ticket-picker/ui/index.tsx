import React, { useEffect, useState } from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import { selectTicketHall } from "../../../shared/store/ticket/selectors";
import { CinemaHall, cinemaHalls } from "../../hall-picker/config";
import { HallPreview } from "./hall-preview";
import { useTranslation } from "react-i18next";
export const TicketPicker = () => {
  const { t } = useTranslation();
  const [currentHall, setCurrentHall] = useState<CinemaHall | null>(null);
  const currentHallId = useSelector(selectTicketHall);
  useEffect(() => {
    const hall = cinemaHalls.find((hall) => hall.id === currentHallId);
    hall && setCurrentHall(hall);
  }, [currentHallId]);

  return (
    <div className={"ticket-picker"}>
      {currentHall && (
        <>
          <div className={"ticket-picker-text"}>
            {t(currentHall?.description)}
          </div>
          <HallPreview {...currentHall} />
        </>
      )}
    </div>
  );
};
