import IntroRow from "./IntroRow";
import PersonalDetails from "./personalDetails";
import GeneralComponent from "../Resume Component/GeneralComponent";
import { resumeMock } from "../../../resume.mock";
import { useEffect, useState } from "react";
import type { personalInfoType } from "../../types/personalInfo.type";
import { useResume } from "../../context/ResumeContext";
import PlusIcon from "../Icons/PlusIcon";

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

const defaultItem = {
  id: crypto.randomUUID(),
  heading: "New Item",
  description: "",
  designation: "",
  company: "",
};

function ResumeBuilder() {
  // const [resume, setResume] = useState(resumeMock);

  const { resume, loading, saveResume } = useResume();
  const [newSectionTitle, setNewSectionTitle] = useState("");
  const [showNewSectionInput, setShowNewSectionInput] = useState(false);
  const [hasBarChecked, setHasBarChecked] = useState(true);
  const [sectionHasBarMap, setSectionHasBarMap] = useState<
    Record<string, boolean>
  >({});

  if (loading || !resume) {
    return <div>Loading...</div>;
  }

  function addNewSection() {
    if (showNewSectionInput) {
      const title = newSectionTitle.trim();
      if (!title) {
        alert("Please enter a section title");
        return;
      }
      if (resume!.sections[title]) {
        alert("Section already exists");
        return;
      }

      // const updatedSections = { ...resume!.sections, [title]: [] };
      const updatedSections = { ...resume!.sections, [title]: [defaultItem] };
      saveResume({ sections: updatedSections });

      setSectionHasBarMap((prev) => ({ ...prev, [title]: hasBarChecked }));

      setNewSectionTitle("");
      setHasBarChecked(true);
      setShowNewSectionInput(false);
    } else {
      setShowNewSectionInput(true);
    }
  }

  function handleSectionDelete(title: string) {
    // setResume((prev) => ({
    //   ...prev,
    //   sections: Object.fromEntries(
    //     Object.entries(prev.sections).filter(([key]) => key !== title)
    //   ),
    // }));

    const updatedSections = Object.fromEntries(
      Object.entries(resume!.sections).filter(([key]) => key !== title)
    );
    // const updatedResume = { ...resume, sections: updatedSections };
    // console.log("section deleted");
    saveResume({ sections: updatedSections });
  }

  function handlePersonalInfoEdit(updatedInfo: personalInfoType) {
    // setResume((prev) => ({
    //   ...prev,
    //   personalInfo: updatedInfo,
    // }));

    const updatedResume = { ...resume, personalInfo: updatedInfo };
    saveResume({ personalInfo: updatedInfo });
  }

  function handleSectionUpdate(title: string, items: any[]) {
    const updatedSections = { ...resume!.sections, [title]: items };
    saveResume({ sections: updatedSections });
  }

  return (
    <div className="min-h-screen flex justify-center py-10 bg-[#eaeaea] font-sans">
      <div className="w-198.5 h-280.75 bg-[#edf2f5] shadow-[0_0_20px_rgba(0,0,0,0.15)] leading-relaxed ">
        {/* <IntroRow {...resume.personalInfo} /> */}

        <IntroRow
          personalInfo={resume.personalInfo}
          onEdit={handlePersonalInfoEdit}
        />

        {/* main row */}

        <div className="w-full h-[93%] pl-10">
          <div className="columns-2 gap-10 h-full [column-fill:_auto]">
            <div className="break-inside-avoid mb-6 ">
              <PersonalDetails
                {...resume.personalInfo}
                onEdit={handlePersonalInfoEdit}
              />
            </div>

            {Object.entries(resume.sections).map(([key, value]) => {
              if (!Array.isArray(value)) return null;
              return (
                <div key={key} className="break-inside-avoid mb-4">
                  <GeneralComponent
                    title={key}
                    data={value}
                    onSectionDelete={handleSectionDelete}
                    onSectionUpdate={handleSectionUpdate}
                    hasBar={hasBarChecked}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 flex items-center space-x-2">
        {showNewSectionInput && (
          <div className="flex flex-col justify-center items-center space-x-2">
            <input
              type="text"
              value={newSectionTitle}
              onChange={(e) => setNewSectionTitle(e.target.value)}
              placeholder="Enter section title"
              className="px-2 py-1 rounded border border-gray-400"
            />
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={hasBarChecked}
                onChange={(e) => setHasBarChecked(e.target.checked)}
                className="bg-blue-500"
              />
              <span className="text-sm">Show Bar</span>
            </label>
          </div>
        )}

        <button
          onClick={addNewSection}
          className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          <PlusIcon />
          <span>{showNewSectionInput ? "Save Section" : "Add Section"}</span>
        </button>
      </div>
    </div>
  );
}

export default ResumeBuilder;
