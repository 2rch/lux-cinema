import { daysOfWeek, monthsOfYear, workingHours } from "../config";
import { SelectOption } from "../../../shared/ui/select";

export const getDayOptions = () => {
  const result: SelectOption[] = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + i,
    );
    result.push({
      title: `${daysOfWeek[date.getDay()]}, ${date.getDate()} of ${
        monthsOfYear[date.getMonth()]
      }`,
      value: date.getTime(),
    });
  }

  return result;
};

export const getTimeOptions = (pickedDate: number) => {
  const result: SelectOption[] = [];
  const selectedDate = new Date(pickedDate);

  let timeInHours = workingHours.start;

  const today = new Date();
  if (selectedDate.getDay() == today.getDay()) {
    const acceptedTime = new Date(today).getHours() + 1;
    if (acceptedTime > workingHours.start) {
      timeInHours = acceptedTime;
    }
  }

  while (timeInHours < workingHours.end) {
    result.push({
      title: `${timeInHours}:00`,
      value: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        timeInHours,
      ).getTime(),
    });
    timeInHours += 2;
  }

  return result;
};
