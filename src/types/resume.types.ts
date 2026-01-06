import type { SubSection } from "../components/Resume Component/GeneralComponent";
import type { personalInfoType } from "./personalInfo.type";
import type { Section } from "./section.type";


export type ResumeType = {
  personalInfo: personalInfoType;
  sections: Record<string, SubSection[]>;
  // items: Section
};
