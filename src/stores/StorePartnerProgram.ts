import type { Writable } from "svelte/store";
import { writable, get } from "svelte/store";
import type { PartnerProgram } from "../Interfaces/MediumPartnerProgram";

import * as H from "./HelperPartnerProgram";

const partnerProgramStore: Writable<PartnerProgram> = writable();

export const partnerProgram = {
  subscribe: partnerProgramStore.subscribe,
  set: (p: PartnerProgram) => partnerProgramStore.set(p),
  getMonthlyAmounts: () => H.getMonthlyAmounts(get(partnerProgramStore)),
  getEarningPerMonth: () => H.getEarningPerMonth(get(partnerProgramStore)),
  getListStories: () => H.getListStories(get(partnerProgramStore)),
};
