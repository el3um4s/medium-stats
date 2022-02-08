import { getDate } from "../../Interfaces/CustomDateTime";
import type {
  PartnerProgram,
  PartnerProgram_Analysis_Month,
  PartnerProgram_Analysis_ListStories,
} from "../../Interfaces/MediumPartnerProgram";

export const getMonthlyAmounts = (
  stats: PartnerProgram
): PartnerProgram_Analysis_Month[] => {
  const currentMonth = getCurrentMonthAmount(stats);
  const previousMonths = getPreviousMonthsAmount(stats);

  return [currentMonth, ...previousMonths];
};

export const getEarningPerMonth = (
  stats: PartnerProgram
): [string, string | number][] => {
  const monthly: PartnerProgram_Analysis_Month[] = getMonthlyAmounts(stats);
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

export const getListStories = (
  mediumPartnerProgram: PartnerProgram
): PartnerProgram_Analysis_ListStories[] => {
  const list = mediumPartnerProgram.payload.postAmounts;
  return list.map((story) => {
    return {
      id: story.post.id,
      title: story.post.title,
      amountMonth: story.amount,
      amountTot: story.totalAmountPaidToDate,
      homeCollectionId: story.post.homeCollectionId,
      wordCount: story.post.virtuals.wordCount,
      readingTime: story.post.virtuals.readingTime,
      firstPublishedAt: getDate(story.post.firstPublishedAt),
    };
  });
};

function getCurrentMonthAmount(
  stats: PartnerProgram
): PartnerProgram_Analysis_Month {
  return {
    isCurrentMonth: true,
    month: getDate(stats.payload.currentMonthAmount.periodStartedAt),
    amount: stats.payload.currentMonthAmount.amount,
  };
}

function getPreviousMonthsAmount(
  stats: PartnerProgram
): PartnerProgram_Analysis_Month[] {
  return stats.payload.completedMonthlyAmounts.map((month) => {
    return {
      isCurrentMonth: false,
      month: getDate(month.periodStartedAt),
      amount: month.amount,
    };
  });
}
