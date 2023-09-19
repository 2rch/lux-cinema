import React from "react";
import "./index.scss";

export interface SelectOption {
  title: string;
  value: string | number;
}

interface SelectProps {
  options: SelectOption[];
  onChange: (value: number) => void;
  selectedOption?: number | null;
}

export const Select = ({
  selectedOption = null,
  options,
  onChange,
}: SelectProps) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(e.target.value));
  };
  return (
    <select className={"custom-selector"} onChange={handleValueChange}>
      {!selectedOption && (
        <option disabled selected>
          ---Select an option---
        </option>
      )}
      {options.map((option) => (
        <option
          value={option.value}
          key={option.value}
          selected={selectedOption === option.value}
        >
          {option.title}
        </option>
      ))}
    </select>
  );
};
