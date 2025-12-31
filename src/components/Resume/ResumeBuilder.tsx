import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useDebouncedCallback } from 'use-debounce';
import axios from '../../api/axios';
import ExperienceSection from './ExperienceSection';
import '../../css files/resume.css';
import IntroRow from './IntroRow';

import PersonalDetails from './personalDetails';
import Languages from '../Languages Section/Languages';
import Travel from '../Travel Section/Travel';
import References from '../References Section/References';
import Interests from '../Interests Component/Interests';
import ComputerSkills from '../Computer Skills Section/ComputerSection';
import Skills from '../Skills Section/Skills';
import SocialNetworks from '../Social Networks/SocialNetworks';
import Education from '../Education Section/Education';

interface Project {
  heading: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  projects: Project[];
}

interface SelfInfo {
  id: string;
  name: string;
  jobTitle: string;
  city: string;
  email: string;
  phone: string;
  linkedin: string;
}

function ResumeBuilder() {
  const queryClient = useQueryClient();

  // Fetch experiences from backend
  const { data: experiences = [], isLoading } = useQuery<Experience[]>({
    queryKey: ['experiences'],
    queryFn: async () => {
      const res = await axios.get('/cv/experience');
      return res.data;
    },
  });

  // Mutations
  const createMutation = useMutation({
    mutationFn: (newExp: Partial<Experience>) => axios.post('/cv/experience', newExp),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['experiences'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Experience> }) =>
      axios.patch(`/cv/experience/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['experiences'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => axios.delete(`/cv/experience/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['experiences'] });
    },
  });

  const debouncedUpdate = useDebouncedCallback((id: string, updated: Experience) => {
    updateMutation.mutate({ id, data: updated });
  }, 600);


  const addExperience = () => {
    const newExp = {
      company: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      isCurrent: false,
      description: '',
      projects: [],
    };
    createMutation.mutate(newExp);
  };


  const updateExperience = (id: string, updated: Experience) => {
    queryClient.setQueryData(['experiences'], (old: Experience[] | undefined) =>
      old?.map((exp) => (exp.id === id ? updated : exp))
    );
    debouncedUpdate(id, updated);
  };

  const deleteExperience = (id: string) => {
    deleteMutation.mutate(id);
  };

  // Project handlers (nested updates)
  const addProject = (expId: string) => {
    queryClient.setQueryData(['experiences'], (old: Experience[] | undefined) =>
      old?.map((exp) =>
        exp.id === expId
          ? { ...exp, projects: [...exp.projects, { heading: '', description: '' }] }
          : exp
      )
    );


    const updatedExp = experiences.find((e) => e.id === expId);
    if (updatedExp) {
      const newWithProject = {
        ...updatedExp,
        projects: [...updatedExp.projects, { heading: '', description: '' }],
      };
      debouncedUpdate(expId, newWithProject);
    }
  };

  const updateProject = (
    expId: string,
    projIndex: number,
    field: 'heading' | 'description',
    value: string
  ) => {
    queryClient.setQueryData(['experiences'], (old: Experience[] | undefined) =>
      old?.map((exp) =>
        exp.id === expId
          ? {
            ...exp,
            projects: exp.projects.map((p, i) =>
              i === projIndex ? { ...p, [field]: value } : p
            ),
          }
          : exp
      )
    );

    // Debounced save
    const updatedExp = experiences.find((e) => e.id === expId);
    if (updatedExp) {
      const newProjects = updatedExp.projects.map((p, i) =>
        i === projIndex ? { ...p, [field]: value } : p
      );
      debouncedUpdate(expId, { ...updatedExp, projects: newProjects });
    }
  };

  const deleteProject = (expId: string, projIndex: number) => {
    queryClient.setQueryData(['experiences'], (old: Experience[] | undefined) =>
      old?.map((exp) =>
        exp.id === expId
          ? { ...exp, projects: exp.projects.filter((_, i) => i !== projIndex) }
          : exp
      )
    );

    const updatedExp = experiences.find((e) => e.id === expId);
    if (updatedExp) {
      const newProjects = updatedExp.projects.filter((_, i) => i !== projIndex);
      debouncedUpdate(expId, { ...updatedExp, projects: newProjects });
    }
  };

  if (isLoading) {
    return (
      <div className="wrapperStyle">
        <div className="pageStyle" style={{ textAlign: 'center', paddingTop: '100px' }}>
          <p>Loading your resume...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapperStyle">
      <div className="pageStyle font-sans">
        <IntroRow />



        {/* main row */}
        <div className='flex flex-row w-full h-[93%] pl-10'>

          {/* left side column */}
          <div className='flex flex-col w-[65%] '>
         
            <PersonalDetails />
          
            
       <Education />
        <Skills />
        <ComputerSkills />

          </div>
          {/* right side column*/}
          <div className='flex flex-col w-[35%] '>

 <Languages />
             <Travel />
              <References />
        <Interests />
        <SocialNetworks />
          </div>



        </div>
       
        


        {/* <ExperienceSection
          experiences={experiences}
          onAddExperience={addExperience}
          onUpdateExperience={updateExperience}
          onDeleteExperience={deleteExperience}
          onAddProject={addProject}
          onUpdateProject={updateProject}
          onDeleteProject={deleteProject}
        /> */}
      </div>
    </div>
  );
}

export default ResumeBuilder;









