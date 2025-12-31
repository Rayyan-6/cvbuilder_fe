import EducationComponent from "./EducationComponent"

function Education(){
    return <div className="mr-10">
        <EducationComponent title="Education"
            subSections={
                [
                    {
                        degree: "Diploma",
                        duration: "From 2014 to 2015",
                        institute: "University Town",
                        description: [
                            "Education highlights",
                            "Project achievements",
                        ]
                    },
                    {
                        degree: "Diploma",
                        duration: "From 2014 to 2015",
                        institute: "University Town",
                        description: [
                            "Education highlights",
                            "Project achievements",
                        ]
                    },
                ]
            }
        />
    </div>
}

export default Education
