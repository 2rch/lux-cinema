import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

export interface SelectOption {
  title: string;
  value: string | number;
}

interface SelectProps {
  options: SelectOption[];
  onChange: (value: number) => void;
  selectedOption?: number | null;
  additionalClass?: string;
}

export const Select = ({
  selectedOption = null,
  options,
  onChange,
  additionalClass,
}: SelectProps) => {
  const { t } = useTranslation();
  const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(e.target.value));
  };
  return (
    <select
      className={clsx("custom-selector", additionalClass && additionalClass)}
      onChange={handleValueChange}
    >
      {!selectedOption && (
        <option disabled selected>
          {t("selector.default_option")}
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
