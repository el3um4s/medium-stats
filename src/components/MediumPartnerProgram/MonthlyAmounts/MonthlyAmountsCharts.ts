import type { PartnerProgram_Analysis_ListStories } from "../../../Interfaces/MediumPartnerProgram";

interface PieData {
  cols: { label: string; type: string }[];
  rows: [string, number][];
}

export const earningPerStory = (
  listStories: PartnerProgram_Analysis_ListStories[]
): PieData => {
  const listValue: { title: string; amount: number }[] = [...listStories]
    .sort((a, b) => b.amountTot - a.amountTot)
    .map((story) => {
      const title = story.title;
      const amount = story.amountTot;
      return { title, amount };
    });

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

export const treemapWordsAndEarning = (
  listStories: PartnerProgram_Analysis_ListStories[]
): [String, String, Number | String, Number | String][] => {
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
  listStories: PartnerProgram_Analysis_ListStories[]
): [
  Number | String,
  Number | String,
  String | { type: String; role: String; p: { html: boolean } }
][] => {
  const cols: [
    String,
    String,
    { type: String; role: String; p: { html: boolean } }
  ] = [
    "Words",
    "Dollars",
    { type: "string", role: "tooltip", p: { html: true } },
  ];
  const rows: [Number, Number, String][] = listStories.map((story) => [
    story.wordCount,
    story.amountTot / 100,
    `
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

// stackoverflow.com/questions/40774697/how-can-i-group-an-array-of-objects-by-key
// github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
function groupBy(xs, f) {
  return xs.reduce(
    (r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  );
}
