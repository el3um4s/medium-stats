import type { MediumPartnerProgram } from "../Interfaces/MediumPartnerProgram";

const sanitizeOriginalStats = (contents: string) => {
  const result = contents.startsWith(`])}while(1);</x>`)
    ? contents.replace(`])}while(1);</x>`, "")
    : contents;
  return result;
};

export const loadMediumJSONStats = async (): Promise<MediumPartnerProgram> => {
  let [fileHandle] = await window["showOpenFilePicker"]();
  const file = await fileHandle.getFile();
  const contents = await file.text();
  const stats = JSON.parse(sanitizeOriginalStats(contents));
  return stats;
};
