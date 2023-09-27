import React, { useState } from "react";
import { Select } from "../../../shared/ui/select";
import { getDayOptions, getTimeOptions } from "../lib";
import "./index.scss";
import { selectTicketTime } from "../../../shared/store/ticket/selectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../shared/store/store";
import { setTicketTime } from "../../../shared/store/ticket/actions";

export const DatePicker = () => {
  const [pickedDate, setPickedDay] = useState<number | null>(null);
  const pickedTime = useSelector(selectTicketTime);
  const dispatch = useAppDispatch();
  const setPickedTime = (time: number) => {
    dispatch(setTicketTime(time));
  };

  const dayOptions = getDayOptions();
  return (
    <div className={"date-picker"}>
      <div className={"date-picker-text"}>Select best date:</div>
      <Select
        selectedOption={pickedDate}
        options={dayOptions}
        onChange={setPickedDay}
      />

      {pickedDate && (
        <>
          <div className={"date-picker-text"}>Select best time</div>
          <Select
            selectedOption={pickedTime}
            options={getTimeOptions(pickedDate)}
            onChange={setPickedTime}
          />
        </>
      )}
    </div>
  );
};
