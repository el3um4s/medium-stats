import type { PartnerProgram } from "../../Interfaces/MediumPartnerProgram";

export const getStoryById = (
  mediumPartnerProgram: PartnerProgram,
  id: string
) => {
  const list = mediumPartnerProgram.payload.postAmounts;
  return list.find((p) => p.post.id === id);
};
