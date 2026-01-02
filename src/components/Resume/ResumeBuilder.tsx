import IntroRow from "./IntroRow";
import PersonalDetails from "./personalDetails";
import GeneralComponent from "../Resume Component/GeneralComponent";
import { resumeMock } from "../../../resume.mock";
import { useState } from "react";

type Project = {
  heading: string;
  description: string;
};

export type Experience = {
  id: string;
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  projects: Project[];
};

function ResumeBuilder() {
  const [resume, setResume] = useState(resumeMock);

  return (
    <div className="min-h-screen flex justify-center py-10 bg-[#eaeaea] font-sans">
      <div className="w-198.5 min-h-280.75 bg-[#edf2f5] shadow-[0_0_20px_rgba(0,0,0,0.15)] leading-relaxed">
        <IntroRow />

        {/* main row */}
        <div className="flex flex-row w-full h-[93%] pl-10">
          {/* left side column */}
          <div className="flex flex-col w-[65%] ">
            <PersonalDetails />

            {Object.entries(resume).map(([key, value]) => {
              if (!Array.isArray(value)) return null;
              return <GeneralComponent key={key} title={key} data={value} />;
            })}
          </div>

          {/* right side column*/}
          <div className="flex flex-col w-[35%] "></div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
