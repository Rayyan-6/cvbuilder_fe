type Project = {
  heading: string;
  description: string;
};

type Experience = {
  id: string;
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  projects: Project[];
};

type ExperienceEntryProps = {
  experience: Experience;
  onChange: (updated: Experience) => void;
  onDelete: () => void;
  onAddProject: () => void;
  onUpdateProject: (
    index: number,
    field: "heading" | "description",
    value: string
  ) => void;
  onDeleteProject: (index: number) => void;
};

const ExperienceEntry = (props: ExperienceEntryProps) => {
  return (
    <div className="experience-entry bg-white ml-5 p-2">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Company Name"
            value={props.experience.company}
            onChange={(e) =>
              props.onChange({ ...props.experience, company: e.target.value })
            }
            className="companyStyle"
          />
          <input
            type="text"
            placeholder="Job Title"
            value={props.experience.jobTitle}
            onChange={(e) =>
              props.onChange({ ...props.experience, jobTitle: e.target.value })
            }
            className="jobTitleStyle"
          />
        </div>
        <button onClick={props.onDelete} className="deleteBtnStyle">
          ✕
        </button>
      </div>

      {/* Dates */}
      <div className="bg-[#555] text-[13px] m-5">
        <input
          type="month"
          value={props.experience.startDate}
          onChange={(e) =>
            props.onChange({ ...props.experience, startDate: e.target.value })
          }
          className="dateStyle"
        />
        <span className="m-5">-</span>
        {props.experience.isCurrent ? (
          <span className="font-bold text-[#2e7d32] font-sans">Present</span>
        ) : (
          <input
            type="month"
            value={props.experience.endDate}
            onChange={(e) =>
              props.onChange({ ...props.experience, endDate: e.target.value })
            }
            className="dateStyle"
          />
        )}
        <label className="ml-[12px] text-[12px]">
          <input
            type="checkbox"
            checked={props.experience.isCurrent}
            onChange={(e) =>
              props.onChange({
                ...props.experience,
                isCurrent: e.target.checked,
                endDate: "",
              })
            }
            className="mr-[4px] items-center font-sans"
          />
          Present
        </label>
      </div>

      <textarea
        placeholder="Describe your responsibilities, achievements, etc"
        value={props.experience.description}
        onChange={(e) =>
          props.onChange({ ...props.experience, description: e.target.value })
        }
        className="descriptionStyle"
        maxLength={100}
        rows={3}
      />
      <div className="text-[11px] text-[#777] text-right">
        {props.experience.description.length}/100
      </div>

      {/* Projects */}
      {props.experience.projects.length > 0 && (
        <div className="mt-[12px] ml-[12px]">
          {props.experience.projects.map((proj, idx) => (
            <div key={idx} className="mb-[10px] text-[13px]">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={proj.heading}
                  onChange={(e) =>
                    props.onUpdateProject(idx, "heading", e.target.value)
                  }
                  className="projectTitleInputStyle"
                />
                <button
                  onClick={() => props.onDeleteProject(idx)}
                  className="deleteBtnStyle"
                >
                  ✕
                </button>
              </div>

              <textarea
                placeholder="Describe the project, your role, technologies used, and results..."
                value={proj.description}
                onChange={(e) =>
                  props.onUpdateProject(idx, "description", e.target.value)
                }
                className="projectDescriptionStyle"
                maxLength={100}
                rows={2}
              />
              <div className="text-[11px] text-[#777] ">
                {proj.description.length}/100
              </div>
            </div>
          ))}
        </div>
      )}

      <button onClick={props.onAddProject} className="smallAddBtnStyle">
        + Add Project
      </button>
    </div>
  );
};

export default ExperienceEntry;
