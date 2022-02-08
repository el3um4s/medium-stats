import type { PartnerProgram_Analysis_ListStories } from "../../../Interfaces/MediumPartnerProgram";
interface CalendarData {
  cols: ColsCalendar[];
  rows: [Date, number][];
}
interface ColsCalendar {
  id: string;
  type: string;
}

export const writingDay = (
  listStories: PartnerProgram_Analysis_ListStories[]
): CalendarData => {
  const listValue: { date: Date; words: number }[] = listStories.map(
    (story) => {
      const { day, month, year } = story.firstPublishedAt;
      const date: Date = new Date(year, month, day);
      const words = story.wordCount;
      return { date, words };
    }
  );

  const groupedValue = groupBy(listValue, (s) => s.date);

  let rows = [];
  for (const property in groupedValue) {
    const words = groupedValue[property].reduce(
      (sum, current) => sum + current.words,
      0
    );
    rows.push([new Date(property), words]);
  }

  const cols = [
    { type: "date", id: "Date" },
    { type: "number", id: "$" },
  ];
  return {
    cols,
    rows,
  };
};

// stackoverflow.com/questions/40774697/how-can-i-group-an-array-of-objects-by-key
// github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
function groupBy(xs, f) {
  return xs.reduce(
    (r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  );
}
