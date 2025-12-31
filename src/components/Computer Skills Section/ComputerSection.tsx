import GeneralComponent from "../Resume Component/GeneralComponent"

function ComputerSkills(){
    return <div className="pt-5 mr-10">
        <GeneralComponent 
        
        title="Computer Skills"
        subSections={
            [
                {
                    heading: 'Software name',
                    description: 'Briefly give your level of expertise'
                },
                {
                    heading: 'Name of another software',
                    description: 'Business usage context'
                },
            ]
        }
        />
    </div>
}

export default ComputerSkills
