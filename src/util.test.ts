import {
  createInitialWeek,
  getBeforeday,
  getNextYear,
  insertWeek,
  isSaturday,
} from "./util";

describe("test", () => {
  describe("createInitialWeek", () => {
    it("should return 7 undefined array", () => {
      const actual = createInitialWeek();
      expect(actual).toEqual([
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ]);
    });
  });
  describe("isSaturday", () => {
    it("should be false when the date is 2021-04-25", () => {
      const actual = isSaturday(new Date("2021-04-25T12:21:01.636Z"));
      expect(actual).toEqual(false);
    });
    it("should be false when the date is 2021-04-24", () => {
      const actual = isSaturday(new Date("2021-04-24T12:21:01.636Z"));
      expect(actual).toEqual(true);
    });
  });
  describe("getBeforeday", () => {
    it("should return 2021-04-24 when the input is 2021-04-25", () => {
      const actual = getBeforeday(new Date("2021-04-25T12:21:01.636Z"));
      expect(actual).toEqual(new Date("2021-04-24T12:21:01.636Z"));
    });
  });
  describe("getNextYear", () => {
    it("should return 2022-04-24 when the input is 2021-04-24", () => {
      const actual = getNextYear(new Date("2021-04-24T12:21:01.636Z"));
      expect(actual).toEqual(new Date("2022-04-24T12:21:01.636Z"));
    });
  });
  describe("getNextDay", () => {
    it("should return 2021-04-25 when the input is 2021-04-24", () => {
      const actual = getNextYear(new Date("2021-04-24T12:21:01.636Z"));
      expect(actual).toEqual(new Date("2021-04-25T12:21:01.636Z"));
    });
  });
  describe("insertWeek", () => {
    test.each`
      date                      | week                   | expected
      ${new Date("2021-04-18")} | ${createInitialWeek()} | ${[new Date("2021-04-18"), undefined, undefined, undefined, undefined, undefined, undefined]}
      ${new Date("2021-04-19")} | ${createInitialWeek()} | ${[undefined, new Date("2021-04-19"), undefined, undefined, undefined, undefined, undefined]}
      ${new Date("2021-04-20")} | ${createInitialWeek()} | ${[undefined, undefined, new Date("2021-04-20"), undefined, undefined, undefined, undefined]}
      ${new Date("2021-04-21")} | ${createInitialWeek()} | ${[undefined, undefined, undefined, new Date("2021-04-21"), undefined, undefined, undefined]}
      ${new Date("2021-04-22")} | ${createInitialWeek()} | ${[undefined, undefined, undefined, undefined, new Date("2021-04-22"), undefined, undefined]}
      ${new Date("2021-04-23")} | ${createInitialWeek()} | ${[undefined, undefined, undefined, undefined, undefined, new Date("2021-04-23"), undefined]}
      ${new Date("2021-04-24")} | ${createInitialWeek()} | ${[undefined, undefined, undefined, undefined, undefined, undefined, new Date("2021-04-24")]}
    `(
      "returns $expected when $date is inserted in $week",
      ({ date, week, expected }) => {
        expect(insertWeek(date, week)).toEqual(expected);
      }
    );
  });
});
