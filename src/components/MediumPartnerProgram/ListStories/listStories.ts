import type {
  Table_Labels,
  Table_Totals,
  Table_Orders,
} from "../../Tables/Table";
import type { StoryAmountStats } from "../../../Interfaces/MediumPartnerProgram";

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

export const ordersTable: Table_Orders[] = [
  {
    key: "firstPublishedAt",
    functionOrderASC: (key: string, list: StoryAmountStats[]) => [
      ...orderDatesASC(key, list),
    ],
    functionOrderDESC: (key: string, list: StoryAmountStats[]) => [
      ...orderDatesDESC(key, list),
    ],
  },
  {
    key: "amountTot",
    functionOrderASC: (key: string, list: StoryAmountStats[]) => [
      ...orderNumbersASC(key, list),
    ],
    functionOrderDESC: (key: string, list: StoryAmountStats[]) => [
      ...orderNumbersDESC(key, list),
    ],
  },
  {
    key: "amountMonth",
    functionOrderASC: (key: string, list: StoryAmountStats[]) => [
      ...orderNumbersASC(key, list),
    ],
    functionOrderDESC: (key: string, list: StoryAmountStats[]) => [
      ...orderNumbersDESC(key, list),
    ],
  },
  {
    key: "title",
    functionOrderASC: (key: string, list: StoryAmountStats[]) => [
      ...orderStringsASC(key, list),
    ],
    functionOrderDESC: (key: string, list: StoryAmountStats[]) => [
      ...orderStringsDESC(key, list),
    ],
  },
  {
    key: "wordCount",
    functionOrderASC: (key: string, list: StoryAmountStats[]) => [
      ...orderNumbersASC(key, list),
    ],
    functionOrderDESC: (key: string, list: StoryAmountStats[]) => [
      ...orderNumbersDESC(key, list),
    ],
  },
];

export const chartsTable: string[] = ["amountTot", "amountMonth", "wordCount"];

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

function orderStringsASC(
  key: string,
  list: StoryAmountStats[]
): StoryAmountStats[] {
  return list.sort((a, b) => {
    const x = a[key].toUpperCase();
    const y = b[key].toUpperCase();
    return x > y ? 1 : x < y ? -1 : 0;
  });
}

function orderStringsDESC(
  key: string,
  list: StoryAmountStats[]
): StoryAmountStats[] {
  return list.sort((a, b) => {
    const x = a[key].toUpperCase();
    const y = b[key].toUpperCase();
    return x > y ? -1 : x < y ? 1 : 0;
  });
}

function orderNumbersASC(
  key: string,
  list: StoryAmountStats[]
): StoryAmountStats[] {
  return list.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x > y ? 1 : x < y ? -1 : 0;
  });
}

function orderNumbersDESC(
  key: string,
  list: StoryAmountStats[]
): StoryAmountStats[] {
  return list.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x > y ? -1 : x < y ? 1 : 0;
  });
}

function orderDatesASC(
  key: string,
  list: StoryAmountStats[]
): StoryAmountStats[] {
  return list.sort((a, b) => {
    const x = a[key].timestamp;
    const y = b[key].timestamp;
    return x > y ? 1 : x < y ? -1 : 0;
  });
}

function orderDatesDESC(
  key: string,
  list: StoryAmountStats[]
): StoryAmountStats[] {
  return list.sort((a, b) => {
    const x = a[key].timestamp;
    const y = b[key].timestamp;
    return x > y ? -1 : x < y ? 1 : 0;
  });
}
