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
}

export interface EarningForMonthPub {
  cols: Cols[];
  rows: [string, number][];
}

interface Cols {
  label: string;
  type: string;
}
