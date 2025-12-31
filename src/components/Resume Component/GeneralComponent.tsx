import { useState } from "react"
import Modal from "../Modals/Modal"

type SubSection = {
    heading?: string,
    description?: string,
    designation?: string
    icon?: string,
    iconDesc?: string
}

type GeneralComponentProps = {
    title: string,
    subSections: SubSection[]
}


function GeneralComponent(props: GeneralComponentProps) {

    const [isModalOpen, setIsModalOpen] = useState(false)


    return <div className="group relative hover:bg-gray-300">

                    <Modal 
                    isOpen={isModalOpen}
                    onClose={()=>setIsModalOpen(false)}/>

        <span className="flex flex-col ">
            <div className="opacity-0 group-hover:opacity-100 ">
                <div className="bg-black flex flex-row text-white w-25 h-5 justify-center">
                    {/* dustbin button*/}
                    <button 
                    
                    
                    className=" px-2 cursor-pointer"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg></button>

                    

                    {/* +ADD button */}

                    <button 
                    onClick={()=>setIsModalOpen(true)}
                    className=" px-2 text-sm flex flex-row justify-center cursor-pointer"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg> <span>ADD</span> </button>


                </div>
            </div>
            <h2 className="font-bold text-1xl pb-3">{props.title}</h2>
        </span>

        <div className="bg-white ml-5 pl-5 pt-5">
            {props.subSections.map((section, idx) => (
                <InsideComponent
                    key={idx}
                    heading={section.heading}
                    designation={section.designation}
                    description={section.description}
                    icon={section.icon}
                    iconDesc={section.iconDesc}
                    />
            ))}
        </div>
    </div>
}


function InsideComponent(props: SubSection) {
    return <div className="pb-3 ">
        <span className="flex flex-row justify-between ">
            {!props.icon && (<div className="font-bold text-xs ">{props.heading}</div>)}

            {/* hover container */}
            <span className="opacity-0 hover:opacity-100 w-12 h-5 bg-white text-black flex flex-row justify-between">

                {/* edit button */}
                <button className="cursor-pointer">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                </svg>
                </button>
                

                {/* delete dustbin */}
                <button className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>
            </span>
        </span>

        {props.icon && (
            <div className="flex flex-row">
            <div className="">{props.icon}</div>
            <div className="ml-3">{props.iconDesc}</div>
</div>
            )
            }

        {props.designation && (<div className="text-xs ">{props.designation}</div>)}
        {props.description && (<div className="text-xs ">{props.description}</div>)}
    </div>
}

export default GeneralComponent