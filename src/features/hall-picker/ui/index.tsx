import React from "react";
import { RadioSelect } from "../../../shared/ui/radio-select";
import { useSelector } from "react-redux";
import { selectTicketHall } from "../../../shared/store/ticket/selectors";
import { useAppDispatch } from "../../../shared/store/store";
import {
  setTicketHall,
  setTicketPlaces,
} from "../../../shared/store/ticket/actions";
import { cinemaHalls } from "../config";
import "./index.scss";

export const HallPicker = () => {
  const currentHall = useSelector(selectTicketHall);
  const dispatch = useAppDispatch();
  const handleHallChange = (hallId: number) => {
    dispatch(setTicketHall(hallId));
    dispatch(setTicketPlaces([]));
  };
  const hallOptions = cinemaHalls.map((hall) => {
    return {
      value: hall.id,
      title: hall.title,
    };
  });

  return (
    <div className={"hall-picker"}>
      <div className={"hall-picker-text"}>Select movie hall</div>
      <RadioSelect
        options={hallOptions}
        selectedOption={currentHall}
        onChange={handleHallChange}
      />
    </div>
  );
};
