import { getDate } from "../../../Interfaces/CustomDateTime";
import type {
  PartnerProgram,
  PartnerProgram_Analysis_Month,
} from "../../../Interfaces/MediumPartnerProgram";

export const getMonthlyAmounts = (
  stats: PartnerProgram
): PartnerProgram_Analysis_Month[] => {
  const currentMonth = getCurrentMonthAmount(stats);
  const previousMonths = getPreviousMonthsAmount(stats);

  return [currentMonth, ...previousMonths];
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
