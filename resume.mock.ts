import type { ResumeType } from "./src/types/resume.types";

export const resumeMock: ResumeType = {
  personalInfo: {
    id: "p",
    name: "Muhammad Rayyan",
    position: "Software Engineer",
    email: "test@example.com",
    phone: "+92-111-1234567",
    address: "Lahore",
    driving_license: false,
    dob: "2003-01-06",
  },
  sections: {
    languages: [
      {
        id: "l1",
        heading: "English",
        description: "Professional",
      },
      {
        id: "l2",
        heading: "Urdu",
        description: "Native",
      },
      {
        id: "l3",
        heading: "Spanish",
        description: "Starter",
      },
    ],

    skills: [
      {
        id: "s1",
        heading: "React",
        description: "Hooks, Context, React Query",
      },
      {
        id: "s2",
        heading: "TypeScript",
        description: "Strong typing, generics",
      },
    ],

    interests: [
      {
        id: "i1",
        heading: "Open-source contribution",
      },
      { id: "i2", heading: "UI/UX design" },
      { id: "i3", heading: "Tech blogging" },
    ],

    references: [
      {
        id: "r1",
        heading: "Ali Khan",
        designation: "Senior Software Engineer",
        company: "Tech Solutions Pvt Ltd",
        description: "ali.khan@example.com",
      },
    ],
    

    travel: [
      {
        id: "t1",
        heading: "USA",
        description: "I went to USA for travelling",
      },
    ],
  },
};
