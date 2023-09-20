import React from "react";
import { SelectOption } from "../../select";
import "./index.scss";

interface RadioSelectProps {
  options: SelectOption[];
  onChange: (value: number) => void;
  selectedOption?: number | null;
}

export const RadioSelect = ({
  options,
  onChange,
  selectedOption = null,
}: RadioSelectProps) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };
  return (
    <div className={"radio-select"}>
      {options.map((option: SelectOption, i) => (
        <label key={i}>
          <input
            className={"radio-select-input"}
            type={"radio"}
            value={option.value}
            checked={option.value === selectedOption}
            onChange={handleValueChange}
          />
          {option.title}
        </label>
      ))}
    </div>
  );
};
