import { createContext, useContext, useState, useEffect } from "react";
import { resumeApi } from "../api/resumeApi";
import type { ResumeType } from "../types/resume.types";

type ResumeContextType = {
  resume: ResumeType | null;
  loading: boolean;
  saveResume: (updates: any) => Promise<void>;
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);



export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const [resume, setResume] = useState<ResumeType | null>(null);
  const [loading, setLoading] = useState(true);

  const isEmptySections = (sections: Record<string, any[]>) =>
  Object.values(sections).every(
    (items) => Array.isArray(items) && items.length === 0
  );


  useEffect(() => {
  resumeApi.getResume()
    .then((data) => {
      const normalizedResume = {
        ...data,
        sections: isEmptySections(data.sections) ? {} : data.sections,
      };

      setResume(normalizedResume);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Failed to load resume", err);
      setLoading(false);
    });
}, []);

  const saveResume = async (updates: Partial<ResumeType>) => {
    if (!resume) return;

    const mergedResume: ResumeType = {
      ...resume,
      ...updates,
    };

    const updatedFromServer = await resumeApi.updateResume(mergedResume);

    setResume((prev) => ({
      ...prev!,
      ...updatedFromServer,
    }));
  };

  return (
    <ResumeContext.Provider value={{ resume, loading, saveResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error("useResume must be used within ResumeProvider");
  return context;
};
