import { getDate } from "../Interfaces/CustomDateTime";

import type {
  MediumDashboard_StoryAmountStats,
  StoryAmountStats,
} from "../Interfaces/MediumPartnerProgram";

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
