export type SundayOrEmpty = (Date & { sunday: never }) | undefined;
export type MondayOrEmpty = (Date & { monday: never }) | undefined;
export type TuesdayOrEmpty = (Date & { tuesday: never }) | undefined;
export type WednesdayOrEmpty = (Date & { Wednesday: never }) | undefined;
export type ThursdayOrEmpty = (Date & { thursday: never }) | undefined;
export type FridayOrEmpty = (Date & { friday: never }) | undefined;
export type SaturdayOrEmpty = (Date & { saturaday: never }) | undefined;

export type Week = [
  SundayOrEmpty,
  MondayOrEmpty,
  TuesdayOrEmpty,
  WednesdayOrEmpty,
  ThursdayOrEmpty,
  FridayOrEmpty,
  SaturdayOrEmpty
];
