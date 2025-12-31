type SubSection={
    heading: string,
    description: string
}

type GeneralComponentProps={
    title: string,
    subSections: SubSection[]
}


function GeneralComponent(props: GeneralComponentProps){
    return <div>
        <h2 className="font-sans font-bold text-1xl">{props.title}</h2>
        <div className="bg-white ml-5 pl-5 pt-5">
            {props.subSections.map( (section,idx) =>(
                <InsideComponent 

                key={idx}
                heading={section.heading}
                description={section.description}
                
                />
            ))}

            
        </div>
    </div>
    
    
}


function InsideComponent(props: SubSection){
    return <div className="pb-3">
    <div className="font-bold">{props.heading}</div>
    <div>{props.description}</div>
    </div>

}

export default GeneralComponent