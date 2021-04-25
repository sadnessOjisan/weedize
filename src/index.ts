import { Week } from "./type";
import {
  isSaturday,
  insertWeek,
  getNextYear,
  getBeforeday,
  getNextDay,
  createInitialWeek,
} from "./util";

/**
 * create GitHub's Weed placeholder from received start date.
 * @param {Date} startDate start Date of weed
 * @returns {Week[]} GitHub Weed Calendar placeholder
 * @example
 * Here's a simple example:
 * ```
 * const actual = weedize(new Date("2021-01-01"));
 * // Prints: [[undefined, ..., 2021-01-01T00:00:00.000Z, 2021-01-02T00:00:00.000Z], ..., [...,"2021-12-30T00:00:00.000Z","2021-12-31T00:00:00.000Z", undefined]]
 * console.log(actual);
 *
 * // Caution: the array item type is Date, not string.
 * ```
 */
export const weedize = (startDate: Date): Week[] => {
  const nextYear = getNextYear(startDate);
  const endDate = getBeforeday(nextYear);
  let dateCursor = new Date(startDate);
  let week: Week = createInitialWeek();
  const res: Week[] = [];
  for (;;) {
    insertWeek(dateCursor, week);
    if (dateCursor.getTime() === endDate.getTime()) {
      res.push(week);
      break;
    }
    if (isSaturday(dateCursor)) {
      res.push(week);
      week = createInitialWeek();
    }
    dateCursor = getNextDay(dateCursor);
  }
  return res;
};
