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
import { useTranslation } from "react-i18next";

export const HallPicker = () => {
  const { t } = useTranslation();
  const currentHall = useSelector(selectTicketHall);
  const dispatch = useAppDispatch();
  const handleHallChange = (hallId: number) => {
    dispatch(setTicketHall(hallId));
    dispatch(setTicketPlaces([]));
  };
  const hallOptions = cinemaHalls.map((hall) => {
    return {
      value: hall.id,
      title: t(hall.title),
    };
  });

  return (
    <div className={"hall-picker"}>
      <div className={"hall-picker-text"}>{t("hall.selector_title")}</div>
      <RadioSelect
        options={hallOptions}
        selectedOption={currentHall}
        onChange={handleHallChange}
      />
    </div>
  );
};
