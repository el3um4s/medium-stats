import { getDate } from "../Interfaces/CustomDateTime";

import type {
  PartnerProgram_Analysis_ListStories,
  PartnerProgram,
} from "../Interfaces/MediumPartnerProgram";

export const getListStoryAmountStats = (
  mediumPartnerProgram: PartnerProgram
): PartnerProgram_Analysis_ListStories[] => {
  const list = mediumPartnerProgram.payload.postAmounts;
  return list.map((story) => {
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
  });
};
