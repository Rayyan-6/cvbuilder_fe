import GeneralComponent from "../Resume Component/GeneralComponent"

function Travel(){
    return  <div className="mr-5 pt-5">
        <GeneralComponent title="Travel" 

        subSections={[
            {
                heading: "Countries You've travelled to",
                description: "Travel, languages, training"
            },
            {
                heading: "Another Country",
                description: "With the same kind of detail"
            },
        ]}
        
        
        />
    </div>
}

export default Travel