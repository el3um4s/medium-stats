import type { CustomDateTime } from "./CustomDateTime";

export interface PartnerProgram {
  payload: PartnerProgram_Payload;
}

interface PartnerProgram_Payload {
  currentMonthAmount: PartnerProgram_MonthAmount;
  completedMonthlyAmounts: PartnerProgram_MonthAmount[];
  postAmounts: PartnerProgram_PostAmounts[];
}

interface PartnerProgram_MonthAmount {
  periodStartedAt: number;
  amount: number;
}

interface PartnerProgram_PostAmounts {
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

export interface PartnerProgram_Analysis_Month {
  isCurrentMonth: boolean;
  month: CustomDateTime;
  amount: number;
}

export interface PartnerProgram_Analysis_ListStories {
  id: string;
  title: string;
  amountMonth: number;
  amountTot: number;
  homeCollectionId: string;
  wordCount: number;
  readingTime: number;
  firstPublishedAt: CustomDateTime;
}

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
