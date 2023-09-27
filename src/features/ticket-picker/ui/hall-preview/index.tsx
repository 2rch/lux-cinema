import React, { useEffect, useState } from "react";
import { CinemaHall, cinemaHalls } from "../../../hall-picker/config";
import { HallGridElement } from "./hall-grid-element";
import { useAppDispatch } from "../../../../shared/store/store";
import { setTicketPlaces } from "../../../../shared/store/ticket/actions";
import { useSelector } from "react-redux";
import {
  selectTicketHall,
  selectTicketPlaces,
} from "../../../../shared/store/ticket/selectors";
import { TicketPlace } from "../../../../shared/store/ticket/ticket";
import "./index.scss";

export const HallPreview = ({ hallTicketMap }: CinemaHall) => {
  const selectedTickets = useSelector(selectTicketPlaces);
  const currentHallId = useSelector(selectTicketHall);
  const currentHall = cinemaHalls.find((hall) => hall.id === currentHallId);
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSelectedPlaces(
      selectedTickets.map((ticket) => `${ticket.row}, ${ticket.place}`),
    );
  }, [selectedTickets]);

  const handlePlaceSelection = (row: number, place: number) => {
    if (place) {
      let found = false;
      const newTicketPlaces: TicketPlace[] = [];
      selectedTickets.map((selectedPlace) => {
        if (selectedPlace.row === row && selectedPlace.place === place) {
          found = true;
        } else {
          newTicketPlaces.push(selectedPlace);
        }
      });
      if (!found) {
        newTicketPlaces.push({
          row: row,
          place: place,
          price: currentHall?.ticketPrice ?? 0,
        });
      }
      dispatch(setTicketPlaces(newTicketPlaces));
    }
  };

  return (
    <div className={"hall-preview"}>
      <div className={"hall-preview-screen"} />
      <div className={"hall-preview-screen-text"}>Screen</div>
      {hallTicketMap.map(({ row, places }) => (
        <div className={"hall-preview-row"} key={row}>
          <div className={"hall-preview-row-text"}>Row {row}</div>
          <div className={"hall-preview-grid"}>
            {places.map((place, index) => (
              <HallGridElement
                key={`${row} ${index}`}
                row={row}
                place={place}
                isSelected={selectedPlaces.includes(`${row}, ${place}`)}
                onClick={() => handlePlaceSelection(row, Number(place))}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
