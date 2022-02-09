import type { Writable } from "svelte/store";
import { writable, get } from "svelte/store";
import type { PartnerProgram } from "../../Interfaces/MediumPartnerProgram";

import * as H from "./HelperPartnerProgram";
import * as U from "./Utility";
import * as ChartsMonthly from "./HelperMonthlyAmountsCharts";
import * as ChartsCurrentMonth from "./HelperCurrentMonthCharts";
import { getCurrentMonthSynthesis } from "./HelperSynthesis";

const partnerProgramStore: Writable<PartnerProgram> = writable();

export const partnerProgram = {
  subscribe: partnerProgramStore.subscribe,
  set: (p: PartnerProgram) => partnerProgramStore.set(p),
  getCurrentMonthDate: () => U.getCurrentMonthDate(get(partnerProgramStore)),
  getMonthlyAmounts: () => H.getMonthlyAmounts(get(partnerProgramStore)),
  getListStories: () => H.getListStories(get(partnerProgramStore)),
  getCurrentMonthSynthesis: () =>
    getCurrentMonthSynthesis(get(partnerProgramStore)),
  getChartsData: {
    monthly: {
      earningPerMonth: () =>
        ChartsMonthly.earningPerMonth(get(partnerProgramStore)),
      earningPerStory: () =>
        ChartsMonthly.earningPerStory(get(partnerProgramStore)),
      treemapWordsAndEarning: () =>
        ChartsMonthly.treemapWordsAndEarning(get(partnerProgramStore)),
      scatterWordsAndEarning: () =>
        ChartsMonthly.scatterWordsAndEarning(get(partnerProgramStore)),
      wordPerDay: () => ChartsMonthly.wordPerDay(get(partnerProgramStore)),
    },
    currentMonth: {
      earningPerMonthPub: () =>
        ChartsCurrentMonth.earningPerMonthPub(get(partnerProgramStore)),
      earningPerMonthStory: () =>
        ChartsCurrentMonth.earningPerMonthStory(get(partnerProgramStore)),
    },
  },
};
