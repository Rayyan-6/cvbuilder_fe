import type { SubSection } from "../components/Resume Component/GeneralComponent";
import type { personalInfoType } from "./personalInfo.type";


export type ResumeType = {
  personalInfo: personalInfoType;
  sections: Record<string, SubSection[]>;
};
