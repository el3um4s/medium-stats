import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

import type { PartnerProgram } from "../Interfaces/MediumPartnerProgram";

const partnerProgramStore: Writable<PartnerProgram> = writable();

export const partnerProgram = {
  subscribe: partnerProgramStore.subscribe,
  set: (p: PartnerProgram) => partnerProgramStore.set(p),
};
