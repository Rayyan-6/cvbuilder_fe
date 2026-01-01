import { useState } from "react";
import Modal from "../Modals/Modal";
import { PlusIcon, TrashIcon } from "../Icons/Icons";

type SubSection = {
  heading?: string;
  duration?: string;
  company?: string;
  description?: string[];
};

type WorkExperienceComponentProps = {
  title: string;
  subSections: SubSection[];
};

function WorkExperienceComponent(props: WorkExperienceComponentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="group relative hover:bg-gray-300">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <span className="flex flex-col ">
        <div className="opacity-0 group-hover:opacity-100 ">
          <div className="bg-black flex flex-row text-white w-25 h-5 justify-center">
            {/* dustbin button*/}
            <button className=" px-2 cursor-pointer">
              <TrashIcon />
            </button>

            {/* +ADD button */}

            <button
              onClick={() => setIsModalOpen(true)}
              className=" px-2 text-sm flex flex-row justify-center cursor-pointer"
            >
              <PlusIcon />
              {" "}
              <span>ADD</span>{" "}
            </button>
          </div>
        </div>
        <h2 className="font-bold text-xl pb-3">{props.title}</h2>
      </span>

      <div className="bg-white ml-5 pl-5 pt-5">
        {props.subSections.map((section, idx) => (
          <InsideComponent
            key={idx}
            heading={section.heading}
            duration={section.duration}
            company={section.company}
            description={section.description}
          />
        ))}
      </div>
    </div>
  );
}

function InsideComponent(props: SubSection) {
  return (
    <div className="relative pl-8 pb-6">
      {/* Vertical line */}
      <span className="absolute left-3 top-0 h-full w-px bg-black"></span>

      {/* Circle */}
      <span className="absolute left-[7px] top-1 w-3 h-3 rounded-full bg-black border-2 border-gray-500"></span>

      {/* Content */}
      <div>
        <span className="flex flex-row justify-between">
          <div className="font-bold text-xs">{props.heading}</div>

          {/* hover container */}
          <span className="opacity-0 hover:opacity-100 w-12 h-5 bg-white text-black flex flex-row justify-between">
            {/* edit */}
            <button className="cursor-pointer">✎</button>

            {/* delete */}
            <button className="cursor-pointer">
              <TrashIcon />
            </button>
          </span>
        </span>

        <span className="flex flex-row text-xs text-gray-500 mt-1">
          {props.duration && <div>{props.duration}</div>}
          {props.company && (
            <div className="ml-2 text-black">{props.company}</div>
          )}
        </span>

        {props.description && (
          <ul className="list-disc ml-5 text-xs mt-2">
            {props.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WorkExperienceComponent;
