import type {
  PartnerProgram,
  PartnerProgram_Analysis_ListStories,
  PartnerProgram_Analysis_Month,
} from "../../../Interfaces/MediumPartnerProgram";
import { getDate } from "../../../Interfaces/CustomDateTime";

interface ColumnsData {
  cols: String[];
  rows: [String, Number][];
}

interface CalendarData {
  cols: ColsCalendar[];
  rows: [Date, Number][];
}
interface ColsCalendar {
  id: string;
  type: string;
}

export const earningPerMonth = (
  monthly: PartnerProgram_Analysis_Month[]
): (string | number)[][] => {
  const data = monthly.map((m) => m.amount).reverse();
  const labels = monthly
    .map((m) => `${m.month.monthName} ${m.month.year.toString().substring(2)}`)
    .reverse();
  return labels.map((label, index) => [label, data[index] / 100]);
};
