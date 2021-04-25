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
 * @returns {Week} GitHub Weed Calendar placeholder
 */
export const weedize = (startDate: Date): Week[] => {
  const nextYear = getNextYear(startDate);
  const endDate = getBeforeday(nextYear);
  let dateCursor = new Date(startDate);
  let week: Week = createInitialWeek();
  let res: Week[] = [];
  while (true) {
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
