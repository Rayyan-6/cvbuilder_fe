import React from "react";
import ExperienceEntry from "./ExperienceEntry";
import "../../css files/resume.css";

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

type ExperienceSectionProps = {
  experiences: Experience[];
  onAddExperience: () => void;
  onUpdateExperience: (id: string, updated: Experience) => void;
  onDeleteExperience: (id: string) => void;
  onAddProject: (expId: string) => void;
  onUpdateProject: (
    expId: string,
    projIndex: number,
    field: "heading" | "description",
    value: string
  ) => void;
  onDeleteProject: (expId: string, projIndex: number) => void;
};

const ExperienceSection = ({
  experiences,
  onAddExperience,
  onUpdateExperience,
  onDeleteExperience,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
}: ExperienceSectionProps) => {
  return (
    <div className="experience-section-wrapper w-[60%] pl-10 pt-5 bg-red-500">
      <section className="experience-section bg-amber-300">
        <div className="experience-header">
          <h2 className="experience-title">Experience</h2>
          <button className="add-button" onClick={onAddExperience}>
            +
          </button>
        </div>

        {experiences.length === 0 ? (
          <p className="text-[#999] italic">
            Click "Add Experience" to get started
          </p>
        ) : (
          experiences.map((exp) => (
            <ExperienceEntry
              key={exp.id}
              experience={exp}
              onChange={(updated) => onUpdateExperience(exp.id, updated)}
              onDelete={() => onDeleteExperience(exp.id)}
              onAddProject={() => onAddProject(exp.id)}
              onUpdateProject={(idx, field, value) =>
                onUpdateProject(exp.id, idx, field, value)
              }
              onDeleteProject={(idx) => onDeleteProject(exp.id, idx)}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default ExperienceSection;
