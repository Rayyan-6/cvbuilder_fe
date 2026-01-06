import { createContext, useContext, useState, useEffect } from 'react';
import { resumeApi } from '../api/resumeApi';
import type { ResumeType } from '../types/resume.types';

type ResumeContextType = {
  resume: ResumeType; 
  loading: boolean;
  saveResume: (updates: any) => Promise<void>;
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const [resume, setResume] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    resumeApi.getResume()
      .then(data => {
        setResume(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load resume', err);
        setLoading(false);
      });
  }, []);

  const saveResume = async (updates: any) => {
    try {
      const updatedResume = await resumeApi.updateResume(updates);
      setResume(updatedResume);
    } catch (err) {
      alert('Save failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <ResumeContext.Provider value={{ resume, loading, saveResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error('useResume must be used within ResumeProvider');
  return context;
};