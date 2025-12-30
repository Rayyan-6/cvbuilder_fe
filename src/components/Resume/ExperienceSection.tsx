import React from 'react';
import ExperienceEntry from './ExperienceEntry';
import '../../css files/resume.css'

interface Project {
  heading: string;
  description: string;
}

interface Experience {
  id: string;
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  projects: Project[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
  onAddExperience: () => void;
  onUpdateExperience: (id: string, updated: Experience) => void;
  onDeleteExperience: (id: string) => void;
  onAddProject: (expId: string) => void;
  onUpdateProject: (
    expId: string,
    projIndex: number,
    field: 'heading' | 'description',
    value: string
  ) => void;
  onDeleteProject: (expId: string, projIndex: number) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  onAddExperience,
  onUpdateExperience,
  onDeleteExperience,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
}) => {
  return (
    <div className='experience-section-wrapper w-[60%] pl-10 pt-5'>
    <section className='experience-section '>
        
      <div className="experience-header">
  <h2 className="experience-title">Experience</h2>
  <button className="add-button" onClick={onAddExperience}>+</button>
</div>

      {experiences.length === 0 ? (
        <p style={{ color: '#999', fontStyle: 'italic' }}>
          Click "Add Experience" to get started
        </p>
      ) : (
        experiences.map((exp) => (
          <ExperienceEntry
            key={exp.id}
            experience={exp}
            onChange={(updated) =>
              onUpdateExperience(exp.id, updated)
            }
            onDelete={() => onDeleteExperience(exp.id)}
            onAddProject={() => onAddProject(exp.id)}
            onUpdateProject={(idx, field, value) =>
              onUpdateProject(exp.id, idx, field, value)
            }
            onDeleteProject={(idx) =>
              onDeleteProject(exp.id, idx)
            }
          />
        ))
      )}

      {/* <button className="add-button" onClick={onAddExperience}>
        Add Experience
      </button> */}
    </section>
    </div>
  );
};

export default ExperienceSection;
