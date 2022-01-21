import { getDate } from "../../../Interfaces/CustomDateTime";
import type {
  MediumPartnerProgram,
  MediumDashboard_Month,
  MonthlyAmountsStats,
} from "../../../Interfaces/MediumPartnerProgram";

const getMonthStats = (
  month: MediumDashboard_Month,
  isCurrentMonth = false
): MonthlyAmountsStats => {
  return {
    isCurrentMonth,
    month: getDate(month.periodStartedAt),
    amount: month.amount,
  };
};

export const getMonthlyAmounts = (
  stats: MediumPartnerProgram
): MonthlyAmountsStats[] => {
  const currentMonth = getMonthStats(stats.payload.currentMonthAmount, true);
  const previousMonths = stats.payload.completedMonthlyAmounts.map((month) => {
    return getMonthStats(month);
  });

  return [currentMonth, ...previousMonths];
};

export const getDataForMonthlyAmountsChart = (
  monthly: MonthlyAmountsStats[]
): { data: number[]; labels: string[] } => {
  const data = monthly.map((m) => m.amount).reverse();
  const labels = monthly
    .map((m) => `${m.month.monthName} ${m.month.year.toString().substring(2)}`)
    .reverse();
  return { data, labels };
};
