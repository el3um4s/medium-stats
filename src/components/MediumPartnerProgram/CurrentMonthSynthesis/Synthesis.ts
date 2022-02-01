import type {
  PartnerProgram,
  PartnerProgram_Analysis_ListStories,
} from "../../../Interfaces/MediumPartnerProgram";
import type { CustomDateTime } from "../../../Interfaces/CustomDateTime";
import { getDate } from "../../../Interfaces/CustomDateTime";
import { getListStoryAmountStats } from "../../../functions/storyAmountStats";
export interface MonthSynthesis {
  monthName: string;
  month: number;
  year: number;
  monthlyIncomeTotal: number;
  monthlyIncomeNewArticle: number;
  monthlyIncomeOldArticle: number;
  numberArticleTotal: number;
  numberArticleNewArticle: number;
  numberArticleOldArticle: number;
  monthsTopStory: number;
  averageTotal: number;
  averageNewArticle: number;
  averageOldArticle: number;
  percMonthlyIncomeBestArticle: number;
  percPassiveIncome: number;
  dailyAverageIncome: number;
}

export const synthesis = (
  mediumPartnerProgram: PartnerProgram
): MonthSynthesis => {.
  const listStories = getListStoryAmountStats(mediumPartnerProgram);
  const currentMonth = getCurrentMonth(mediumPartnerProgram);
  const { monthName, month, year } = currentMonth;
  const currentMonthData = getMonthData({ listStories, month, year });
  const previousMonthsData = getPreviousMonthData({ listStories, month, year });

  const monthlyIncomeTotal = getMonthlyIncomeTotal(listStories);
  const monthlyIncomeNewArticle = currentMonthData.income;
  const monthlyIncomeOldArticle = previousMonthsData.income;
  const numberArticleTotal = getNumberArticleTotal(listStories);
  const numberArticleNewArticle = currentMonthData.articles;
  const numberArticleOldArticle = previousMonthsData.articles;
  const monthsTopStory = getMonthsTopStory(listStories);

  const averageTotal = div(monthlyIncomeTotal, numberArticleTotal);
  const averageNewArticle = div(
    monthlyIncomeNewArticle,
    numberArticleNewArticle
  );
  const averageOldArticle = div(
    monthlyIncomeOldArticle,
    numberArticleOldArticle
  );
  const percMonthlyIncomeBestArticle = div(monthsTopStory, monthlyIncomeTotal);
  const percPassiveIncome = div(monthlyIncomeOldArticle, monthlyIncomeTotal);
  const dailyAverageIncome = div(monthlyIncomeTotal, 30);

  return {
    monthName,
    month,
    year,
    monthlyIncomeTotal,
    monthlyIncomeNewArticle,
    monthlyIncomeOldArticle,
    numberArticleTotal,
    numberArticleNewArticle,
    numberArticleOldArticle,
    monthsTopStory,
    averageTotal,
    averageNewArticle,
    averageOldArticle,
    percMonthlyIncomeBestArticle,
    percPassiveIncome,
    dailyAverageIncome,
  };
};

function div(a: number, b: number): number {
  return a * b === 0 ? 0 : a / b;
}

function getCurrentMonthReal(): CustomDateTime {
  const date = Date.now();
  return getDate(date);
}

function getCurrentMonth(mediumPartnerProgram: PartnerProgram): CustomDateTime {
  const periodStartedAt =
    mediumPartnerProgram.payload.currentMonthAmount.periodStartedAt;
  return getDate(periodStartedAt);
}

function getMonthLastStory(
  list: PartnerProgram_Analysis_ListStories[]
): CustomDateTime {
  const sorted = list.sort((a, b) => {
    const x = a.firstPublishedAt.timestamp;
    const y = b.firstPublishedAt.timestamp;
    return x > y ? -1 : x < y ? 1 : 0;
  });
  return sorted[0]?.firstPublishedAt;
}

function getMonthData(obj: {
  listStories: PartnerProgram_Analysis_ListStories[];
  month: number;
  year: number;
}): {
  income: number;
  articles: number;
} {
  const { listStories, month, year } = obj;
  const stories: PartnerProgram_Analysis_ListStories[] = listStories.filter(
    (s) =>
      s.firstPublishedAt.month === month && s.firstPublishedAt.year === year
  );
  const income = getMonthlyIncomeTotal(stories);
  const articles = getNumberArticleTotal(stories);
  return { income, articles };
}

function getPreviousMonthData(obj: {
  listStories: PartnerProgram_Analysis_ListStories[];
  month: number;
  year: number;
}): {
  income: number;
  articles: number;
} {
  const { listStories, month, year } = obj;
  const stories: PartnerProgram_Analysis_ListStories[] = listStories.filter(
    (s) =>
      s.firstPublishedAt.year < year ||
      (s.firstPublishedAt.year === year && s.firstPublishedAt.month < month)
  );
  const income = getMonthlyIncomeTotal(stories);
  const articles = getNumberArticleTotal(stories);
  return { income, articles };
}

function getMonthlyIncomeTotal(
  listStories: PartnerProgram_Analysis_ListStories[]
): number {
  return listStories.reduce((sum, current) => current.amountMonth + sum, 0);
}

function getNumberArticleTotal(
  listStories: PartnerProgram_Analysis_ListStories[]
): number {
  return listStories.length;
}

function getMonthsTopStory(
  listStories: PartnerProgram_Analysis_ListStories[]
): number {
  const listValue = listStories.map((story) => story.amountMonth);
  return Math.max(...listValue);
}
