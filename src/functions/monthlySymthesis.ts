import type { StoryAmountStats } from "./storyAmountStats";
import type {
  MonthSynthesis,
  EarningForMonthPub,
} from "../components/synthesis/Synthesis";
import type { CustomDateTime } from "./dates";
import { getDate } from "./dates";

export const monthSynthesis = (
  listStories: StoryAmountStats[]
): MonthSynthesis => {
  const currentMonth = getCurrentMonth();
  const { monthName, month, year } = currentMonth;
  const currentMonthData = getMonthData({ listStories, month, year });
  const previousMonthsData = getPreviousMonthData({ listStories, month, year });
  return {
    monthName: monthName,
    month: month,
    year: year,
    monthlyIncomeTotal: getMonthlyIncomeTotal(listStories),
    monthlyIncomeNewArticle: currentMonthData.income,
    monthlyIncomeOldArticle: previousMonthsData.income,
    numberArticleTotal: getNumberArticleTotal(listStories),
    numberArticleNewArticle: currentMonthData.articles,
    numberArticleOldArticle: previousMonthsData.articles,
    monthsTopStory: getMonthsTopStory(listStories),
  };
};

export const earningForMonthPub = (
  listStories: StoryAmountStats[]
): EarningForMonthPub => {
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

function getMonthlyIncomeTotal(listStories: StoryAmountStats[]): number {
  return listStories.reduce((sum, current) => current.amountMonth + sum, 0);
}

function getNumberArticleTotal(listStories: StoryAmountStats[]): number {
  return listStories.length;
}

function getMonthsTopStory(listStories: StoryAmountStats[]): number {
  const listValue = listStories.map((story) => story.amountMonth);
  return Math.max(...listValue);
}

function getCurrentMonth(): CustomDateTime {
  const date = Date.now();
  return getDate(date);
}

function getMonthData(obj: {
  listStories: StoryAmountStats[];
  month: number;
  year: number;
}): {
  income: number;
  articles: number;
} {
  const { listStories, month, year } = obj;
  const stories: StoryAmountStats[] = listStories.filter(
    (s) =>
      s.firstPublishedAt.month === month && s.firstPublishedAt.year === year
  );
  const income = getMonthlyIncomeTotal(stories);
  const articles = getNumberArticleTotal(stories);
  return { income, articles };
}

function getPreviousMonthData(obj: {
  listStories: StoryAmountStats[];
  month: number;
  year: number;
}): {
  income: number;
  articles: number;
} {
  const { listStories, month, year } = obj;
  const stories: StoryAmountStats[] = listStories.filter(
    (s) =>
      s.firstPublishedAt.year < year ||
      (s.firstPublishedAt.year === year && s.firstPublishedAt.month < month)
  );
  const income = getMonthlyIncomeTotal(stories);
  const articles = getNumberArticleTotal(stories);
  return { income, articles };
}

// stackoverflow.com/questions/40774697/how-can-i-group-an-array-of-objects-by-key
// github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
function groupBy(xs, f) {
  return xs.reduce(
    (r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  );
}
