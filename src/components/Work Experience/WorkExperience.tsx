import WorkExperienceComponent from "./WorkExperienceComponent"

function WorkExperience(){
    return <div className="mr-10 ">
        <WorkExperienceComponent title="Work Experience"
        subSections={
            [
                {
                    heading: "Software Engineer",
                    duration: "From Jan 2025 to Nov 2026",
                    company: "DevBox",
                    description: [
                        "I worked on DBHRM",
                        "Worked on backend in NestJS"
                    ]
                },
                {
                    heading: "Software Engineer",
                    duration: "From Jan 2025 to Nov 2026",
                    company: "DevBox",
                    description: [
                        "I worked on DBHRM",
                        "Worked on backend in NestJS"
                    ]
                },
            ]
        } />
    </div>
}

export default WorkExperience
