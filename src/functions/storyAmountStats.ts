import type { CustomDateTime } from "./dates";
import { getDate } from "./dates";

import type { MediumDashboard_StoryAmountStats } from "./mediumDashboard";

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

const getStoryAmountStats = (
  story: MediumDashboard_StoryAmountStats
): StoryAmountStats => {
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
};

export const getListStoryAmountStats = (
  list: MediumDashboard_StoryAmountStats[]
): StoryAmountStats[] => {
  return list.map((story) => getStoryAmountStats(story));
};