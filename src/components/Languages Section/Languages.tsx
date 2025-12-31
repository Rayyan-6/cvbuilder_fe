import GeneralComponent from "../Resume Component/GeneralComponent"

function Languages(){
    return  <div className=" pt-5 mr-5">
            <GeneralComponent title="Languages" subSections={
                [
                   { 
                    heading: "English",
                    description: "Professional Level"
                },
                   { 
                    heading: "French",
                    description: "Conversational"
                },
               
                ]
            }/>
        </div>
    
}

export default Languages
