import GeneralComponent from "../Resume Component/GeneralComponent"

function References(){
    return <div className="w-[35%] pt-5">
    <GeneralComponent 
    title="References"
    subSections={
        [
            {
                heading: "Julia Tutor",
                designation: "Associate Professor, University",
                description: "julia@example.com"
            },
            {
                heading: "John Peer",
            designation: "Team Manager, Company",
                description: "+44 11 111111"
            },
        ]
    }
    
    />
    </div>
}

export default References
