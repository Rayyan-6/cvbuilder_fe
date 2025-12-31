import React from 'react';

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

interface ExperienceEntryProps {
  experience: Experience;
  onChange: (updated: Experience) => void;
  onDelete: () => void;
  onAddProject: () => void;
  onUpdateProject: (index: number, field: 'heading' | 'description', value: string) => void;
  onDeleteProject: (index: number) => void;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  experience,
  onChange,
  onDelete,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
}) => {
  return (
    <div className="experience-entry bg-white ml-5 p-2">

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Company Name"
            value={experience.company}
            onChange={(e) => onChange({ ...experience, company: e.target.value })}
            className='companyStyle'
          />
          <input
            type="text"
            placeholder="Job Title"
            value={experience.jobTitle}
            onChange={(e) => onChange({ ...experience, jobTitle: e.target.value })}
           className='jobTitleStyle'
          />
        </div>
        <button onClick={onDelete} className='deleteBtnStyle'>✕</button>
      </div>

      {/* Dates */}
      <div style={{ color: '#555', fontSize: '13px', margin: '4px 0 10px' }}>
        <input
          type="month"
          value={experience.startDate}
          onChange={(e) => onChange({ ...experience, startDate: e.target.value })}
          className='dateStyle'
        />
        <span style={{ margin: '0 8px' }}>–</span>
        {experience.isCurrent ? (
          <span style={{ fontWeight: '500', color: '#2e7d32', fontFamily: 'Sans-serif' }}>Present</span>
        ) : (
          <input
            type="month"
            value={experience.endDate}
            onChange={(e) => onChange({ ...experience, endDate: e.target.value })}
            className='dateStyle'
          />
        )}
        <label style={{ marginLeft: '12px', fontSize: '12px' }}>
          <input
            type="checkbox"
            checked={experience.isCurrent}
            onChange={(e) => onChange({ ...experience, isCurrent: e.target.checked, endDate: '' })}
            style={{ marginRight: '4px', verticalAlign: 'middle', fontFamily: 'sans-serif' }}
          />
          Present
        </label>
      </div>

      <textarea
        placeholder="Describe your responsibilities, achievements, etc"
        value={experience.description}
        onChange={(e) => onChange({ ...experience, description: e.target.value })}
        className='descriptionStyle'
        maxLength={100}
        rows={3}
      />
      <div style={{ fontSize: '11px', color: '#777', textAlign: 'right' }}>
  {experience.description.length}/100
</div>

      {/* Projects */}
      {experience.projects.length > 0 && (
        <div style={{ marginTop: '12px', marginLeft: '12px' }}>
          {experience.projects.map((proj, idx) => (
            <div key={idx} style={{ marginBottom: '10px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <input
                  type="text"
                  placeholder="Project Title"
                  value={proj.heading}
                  onChange={(e) => onUpdateProject(idx, 'heading', e.target.value)}
                  className='projectTitleInputStyle'
                />
                <button onClick={() => onDeleteProject(idx)} className='deleteBtnStyle'>✕</button>
              </div>

              <textarea
                placeholder="Describe the project, your role, technologies used, and results..."
                value={proj.description}
                onChange={(e) => onUpdateProject(idx, 'description', e.target.value)}
                className='projectDescriptionStyle'
                maxLength={100}
                rows={2}
              />
              <div style={{ fontSize: '11px', color: '#777', textAlign: 'right' }}>
  {proj.description.length}/100
</div>
            </div>
          ))}
        </div>
      )}

      <button onClick={onAddProject} className='smallAddBtnStyle'>
        + Add Project
      </button>
    </div>
  );
};


export default ExperienceEntry;