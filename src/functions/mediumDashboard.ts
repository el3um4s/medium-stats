interface MediumDashboard_Payload {
  currentMonthAmount: MediumDashboard_Month;
  completedMonthlyAmounts: MediumDashboard_Month[];
  postAmounts: MediumDashboard_StoryAmountStats[];
}

export interface MediumDashboard {
  payload: MediumDashboard_Payload;
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
