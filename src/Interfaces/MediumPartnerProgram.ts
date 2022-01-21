import type { CustomDateTime } from "./CustomDateTime";

export interface MediumPartnerProgram {
  payload: MediumDashboard_Payload;
}
interface MediumDashboard_Payload {
  currentMonthAmount: MediumDashboard_Month;
  completedMonthlyAmounts: MediumDashboard_Month[];
  postAmounts: MediumDashboard_StoryAmountStats[];
}

export interface MediumDashboard_Month {
  periodStartedAt: number;
  amount: number;
}

export interface MediumDashboard_StoryAmountStats {
  amount: number;
  totalAmountPaidToDate: number;
  post: {
    id: string;
    title: string;
    homeCollectionId: string;
    firstPublishedAt: number;
    virtuals: {
      wordCount: number;
      readingTime: number;
    };
  };
}

export interface MonthlyAmountsStats {
  isCurrentMonth: boolean;
  month: CustomDateTime;
  amount: number;
}

export interface StoryAmountStats {
  id: string;
  title: string;
  amountMonth: number;
  amountTot: number;
  homeCollectionId: string;
  wordCount: number;
  readingTime: number;
  firstPublishedAt: CustomDateTime;
}
