export interface CustomDateTime {
  timestamp: Date;
  year: number;
  month: number;
  monthName: string;
  day: number;
}

export const getDate = (periodStartedAt: number): CustomDateTime => {
  const date = new Date(periodStartedAt);
  return {
    timestamp: date,
    year: date.getFullYear(),
    month: date.getMonth(),
    monthName: date.toLocaleString("default", { month: "short" }),
    day: date.getDate(),
  };
};
