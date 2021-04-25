import type {
  FridayOrEmpty,
  MondayOrEmpty,
  SaturdayOrEmpty,
  SundayOrEmpty,
  ThursdayOrEmpty,
  TuesdayOrEmpty,
  WednesdayOrEmpty,
  Week,
} from "./type";

export const createInitialWeek = (): Week => {
  return [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];
};

const isSunday = (date?: Date): date is SundayOrEmpty => {
  if (date === undefined) return true;
  return date.getDay() === 0;
};

const isMonday = (date?: Date): date is MondayOrEmpty => {
  if (date === undefined) return true;
  return date.getDay() === 1;
};

const isTuesday = (date?: Date): date is TuesdayOrEmpty => {
  if (date === undefined) return true;
  return date.getDay() === 2;
};

const isWednesday = (date?: Date): date is WednesdayOrEmpty => {
  if (date === undefined) return true;
  return date.getDay() === 3;
};

const isThursday = (date?: Date): date is ThursdayOrEmpty => {
  if (date === undefined) return true;
  return date.getDay() === 4;
};

const isFriday = (date?: Date): date is FridayOrEmpty => {
  if (date === undefined) return true;
  return date.getDay() === 5;
};

export const isSaturday = (date?: Date): date is SaturdayOrEmpty => {
  if (date === undefined) return true;
  return date.getDay() === 6;
};

export const getBeforeday = (date: Date) => {
  const copiedDate = new Date(date);
  return new Date(copiedDate.setDate(copiedDate.getDate() - 1));
};

export const getNextYear = (date: Date) => {
  const copiedDate = new Date(date);
  return new Date(copiedDate.setFullYear(copiedDate.getFullYear() + 1));
};

export const getNextDay = (date: Date) => {
  const copiedDate = new Date(date);
  return new Date(copiedDate.setDate(copiedDate.getDate() + 1));
};

export const insertWeek = (date: Date, week: Week) => {
  if (isSunday(date)) {
    week[0] = date;
  } else if (isMonday(date)) {
    week[1] = date;
  } else if (isTuesday(date)) {
    week[2] = date;
  } else if (isWednesday(date)) {
    week[3] = date;
  } else if (isThursday(date)) {
    week[4] = date;
  } else if (isFriday(date)) {
    week[5] = date;
  } else if (isSaturday(date)) {
    week[6] = date;
  } else {
    throw new Error("invalid");
  }
  return week;
};
