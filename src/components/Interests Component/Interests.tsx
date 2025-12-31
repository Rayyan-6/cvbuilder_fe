import GeneralComponent from "../Resume Component/GeneralComponent"

function Interests(){
    return <div className="mr-5 pt-5">

        <GeneralComponent 
            title="Interests"
            subSections={
                [
                    {
                        heading: 'abc',
                        description: 'dasdas'
                    },
                    {
                        heading: 'Sport or Hobby'
                    },
                    {
                        heading: 'Other Interests'
                    },
                ]
            }
        />

    </div>
}

export default Interests
