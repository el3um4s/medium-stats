import type { PartnerProgram } from "../../Interfaces/MediumPartnerProgram";
import type { CustomDateTime } from "../../Interfaces/CustomDateTime";
import { getDate } from "../../Interfaces/CustomDateTime";

export const getCurrentMonthDate = (
  mediumPartnerProgram: PartnerProgram
): CustomDateTime => {
  const periodStartedAt =
    mediumPartnerProgram.payload.currentMonthAmount.periodStartedAt;
  return getDate(periodStartedAt);
};
