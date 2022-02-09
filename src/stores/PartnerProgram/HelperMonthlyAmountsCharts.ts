import type { PartnerProgram } from "../../Interfaces/MediumPartnerProgram";
import { getListStories, getMonthlyAmounts } from "./HelperPartnerProgram";

interface PieData {
  cols: { label: string; type: string }[];
  rows: [string, number][];
}

interface CalendarData {
  cols: ColsCalendar[];
  rows: [Date, number][];
}
interface ColsCalendar {
  id: string;
  type: string;
}

export const earningPerMonth = (
  mediumPartnerProgram: PartnerProgram
): [string, string | number][] => {
  const monthly = getMonthlyAmounts(mediumPartnerProgram);
  const data = monthly.map((m) => m.amount).reverse();
  const labels: string[] = monthly
    .map((m) => `${m.month.monthName} ${m.month.year.toString().substring(2)}`)
    .reverse();

  const column: [string, string] = ["Month", "$"];
  const rows: [string, number][] = labels.map((label, index) => [
    label,
    data[index] / 100,
  ]);
  return [column, ...rows];
};

export const earningPerStory = (mediumPartnerProgram: PartnerProgram) => {
  const listStories = getListStories(mediumPartnerProgram);
  const rows = listStories
    .sort((a, b) => b.amountTot - a.amountTot)
    .map((story) => {
      const title = story.title;
      const id = story.id;
      const amount = story.amountTot / 100;
      return [title, amount, id];
    });

  const cols = [
    { label: "Title", type: "string" },
    { label: "$", type: "number" },
    { label: "ID", type: "string" },
  ];

  return {
    cols,
    rows,
  };
};

export const treemapWordsAndEarning = (
  mediumPartnerProgram: PartnerProgram
): [String, String, Number | String, Number | String][] => {
  const listStories = getListStories(mediumPartnerProgram);
  const rows: [String, String, Number, Number][] = listStories.map((story) => {
    const title = `${story.title} (${story.firstPublishedAt.year} ${story.firstPublishedAt.monthName} ${story.firstPublishedAt.day})`;
    const amount = story.amountTot;
    const words = story.wordCount;
    const month = `${story.firstPublishedAt.monthName} ${story.firstPublishedAt.year}`;
    return [title, month, words, amount];
  });

  const listMonths: [String, String, Number, Number][] = [
    ...new Set(rows.map((row) => row[1])),
  ].map((m) => [m, m.slice(m.length - 4), 0, 0]);

  const listYears: [String, String, Number, Number][] = [
    ...new Set(listMonths.map((m) => m[1])),
  ].map((y) => [y, "Total", 0, 0]);

  return [
    ["Title", "Month", "Words", "$"],
    ["Total", null, 0, 0],
    ...listYears,
    ...listMonths,
    ...rows,
  ];
};

export const scatterWordsAndEarning = (
  mediumPartnerProgram: PartnerProgram
) => {
  const listStories = getListStories(mediumPartnerProgram);
  const cols = [
    "Words",
    "Dollars",
    { type: "string", role: "tooltip", p: { html: true } },
  ];
  const rows = listStories.map((story) => [
    story.wordCount,
    story.amountTot / 100,
    `<!-- id: ${story.id} -->
    <div style="padding:4px;">
    <div>${
      story.title.length > 30 ? story.title.slice(0, 30) + "..." : story.title
    }</div>
    <div style="display:grid;grid-template-columns:8ch 8ch;gap:1px; margin:2px;">
      <div>words</div><div><strong>${story.wordCount}</strong></div>
      <div>dollars</div><div><strong>${(story.amountTot / 100).toFixed(
        2
      )}</strong></div>
    </div>
    </div>`,
  ]);
  return [cols, ...rows];
};

export const wordPerDay = (
  mediumPartnerProgram: PartnerProgram
): CalendarData => {
  const listStories = getListStories(mediumPartnerProgram);
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
