import type { PartnerProgram_Analysis_ListStories } from "../../../Interfaces/MediumPartnerProgram";

export interface PieData {
  cols: Cols[];
  rows: [string, number][];
}

interface Cols {
  label: string;
  type: string;
}

export const earningForMonthPub = (
  listStories: PartnerProgram_Analysis_ListStories[]
): PieData => {
  const listValue: { month: string; amount: number }[] = listStories.map(
    (story) => {
      const month = story.firstPublishedAt.monthName;
      const year = story.firstPublishedAt.year;
      const amount = story.amountMonth;
      return { month: `${month} ${year}`, amount };
    }
  );

  const groupedValue = groupBy(listValue, (m) => m.month);

  let rows = [];
  for (const property in groupedValue) {
    const amount = groupedValue[property].reduce(
      (sum, current) => sum + current.amount,
      0
    );
    rows.push([property, amount / 100]);
  }

  const cols = [
    { label: "Month", type: "string" },
    { label: "$", type: "number" },
  ];
  return {
    cols,
    rows,
  };
};

export const earningForMonthStory = (
  listStories: PartnerProgram_Analysis_ListStories[]
): PieData => {
  const listValue: { title: string; amount: number }[] = listStories.map(
    (story) => {
      const title = story.title;
      const amount = story.amountMonth;
      return { title, amount };
    }
  );

  const groupedValue = groupBy(listValue, (s) => s.title);

  let rows = [];
  for (const property in groupedValue) {
    const amount = groupedValue[property].reduce(
      (sum, current) => sum + current.amount,
      0
    );
    rows.push([property, amount / 100]);
  }

  const cols = [
    { label: "Title", type: "string" },
    { label: "$", type: "number" },
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
