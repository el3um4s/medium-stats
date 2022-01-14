import type { StoryAmountStats } from "./storyAmountStats";
import type { MonthSynthesis } from "../components/synthesis/Synthesis";
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
