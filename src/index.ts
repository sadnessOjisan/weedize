type Sunday = Date & { sunday: never };
type Monday = Date & { monday: never };
type Tuesday = Date & { tuesday: never };
type Wendsday = Date & { wendsday: never };
type Thursday = Date & { thursday: never };
type Friday = Date & { friday: never };
type Saturday = Date & { saturaday: never };

const kusalize = (startDate: Date) => {
  const fullYearDates = 365;
  const oneYearDates = [...Array(fullYearDates)].map((_, index) => {
    return new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() - index
    );
  });
  console.log(oneYearDates);
  const tateLine = 7;
  const yokoLine = Math.round(fullYearDates / 7) + 1; // amari
  const layout: [
    Sunday[],
    Monday[],
    Tuesday[],
    Wendsday[],
    Thursday[],
    Friday[],
    Saturday[]
  ] = [[], [], [], [], [], [], []];
  for (let i = 0; i < yokoLine; i++) {
    for (let j = 0; j < tateLine; j++) {
      const date = oneYearDates.pop();
      if (date) {
        if (isSunday(date)) {
          layout[0].push(date);
        } else if (isMonday(date)) {
          layout[1].push(date);
        }
      } else {
      }
    }
  }
  oneYearDates.forEach((day) => {
    if (isSunday(day)) {
      layout[0].push(day);
    } else if (isMonday(day)) {
      layout[1].push(day);
    }
  });
  return layout;
};

const isSunday = (date: Date): date is Sunday => {
  return date.getDay() === 0;
};

const isMonday = (date: Date): date is Monday => {
  return date.getDay() === 1;
};

console.log(kusalize(new Date()));
