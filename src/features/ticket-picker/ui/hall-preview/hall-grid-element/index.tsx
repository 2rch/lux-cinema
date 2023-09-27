import React from "react";
import clsx from "clsx";
import "./index.scss";

interface HallGridElementProps {
  row: number;
  place: number | null;
  isSelected: boolean;
  onClick: (row: number, place: number) => void;
}
export const HallGridElement = ({
  row,
  place,
  isSelected,
  onClick,
}: HallGridElementProps) => {
  const handleClick = () => {
    if (place) {
      onClick(row, place);
    }
  };

  return (
    <div
      className={clsx(
        "hall-grid-element",
        !place && "empty",
        isSelected && "selected",
      )}
      onClick={handleClick}
    >
      {place}
    </div>
  );
};
