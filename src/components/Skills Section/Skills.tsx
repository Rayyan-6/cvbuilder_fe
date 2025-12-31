import GeneralComponent from "../Resume Component/GeneralComponent"

function Skills(){
    return <div className="w-[60%] pt-5">
        <GeneralComponent 
        title="Skills"
        subSections={
            [
                {
                    heading: 'Skill one',
                    description: 'Provide eamples of your experience using this skill'
                },
                {
                    heading: 'Skill two',
                    description: 'Provide eamples of your experience using this skill'
                },
            ]
        }
        />
    </div>
}

export default Skills
