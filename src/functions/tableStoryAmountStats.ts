import type { Table_Labels, Table_Totals } from "../components/tables/Table";
import type { StoryAmountStats } from "./storyAmountStats";

export const headersTable: Table_Labels[] = [
  { key: "firstPublishedAt", title: "Date", type: "date", width: "12ch" },
  {
    key: "amountTot",
    title: "$ Tot",
    type: "cents",
    width: "10ch",
    align: "end",
  },
  {
    key: "amountMonth",
    title: "$ Month",
    type: "cents",
    width: "10ch",
    align: "end",
  },
  { key: "title", title: "Title", type: "text" },
  {
    key: "wordCount",
    title: "Words",
    type: "numeric",
    width: "6ch",
    align: "end",
  },
];

export const calculateTotalsTable = (
  listStories: StoryAmountStats[],
  headersTable: Table_Labels[]
): Table_Totals[] => {
  const result = headersTable.map((header) => {
    let value: number | string = "";
    if (header.type === "numeric" || header.type === "cents") {
      value = calculateTotalKey(listStories, header.key);
    }
    return { ...header, value };
  });
  return result;
};

function calculateTotalKey(
  listStories: StoryAmountStats[],
  key: string
): number {
  return listStories.reduce((previous, current) => {
    return previous + current[key];
  }, 0);
}
