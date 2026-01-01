import { useState } from 'react';
import Modal from '../Modals/Modal';

type SubSection = {
  degree?: string;
  duration?: string;
  institute?: string;
  description?: string[];
};

type EducationComponentProps = {
  title: string;
  subSections: SubSection[];
};

function EducationComponent(props: EducationComponentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="group relative hover:bg-gray-300">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <span className="flex flex-col ">
        <div className="opacity-0 group-hover:opacity-100 ">
          <div className="bg-black flex flex-row text-white w-25 h-5 justify-center">
            {/* dustbin button*/}
            <button className=" px-2 cursor-pointer">
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

            {/* +ADD button */}

            <button
              onClick={() => setIsModalOpen(true)}
              className=" px-2 text-sm flex flex-row justify-center cursor-pointer"
            >
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
                  d="M12 4v16m8-8H4"
                />
              </svg>{' '}
              <span>ADD</span>{' '}
            </button>
          </div>
        </div>
        <h2 className="font-bold text-1xl pb-3">{props.title}</h2>
      </span>

      <div className="bg-white ml-5 pl-5 pt-5">
        {props.subSections.map((section, idx) => (
          <InsideComponent
            key={idx}
            degree={section.degree}
            duration={section.duration}
            institute={section.institute}
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
          <div className="font-bold text-xs">{props.degree}</div>

          {/* hover container */}
          <span className="opacity-0 hover:opacity-100 w-12 h-5 bg-white text-black flex flex-row justify-between">
            {/* edit */}
            <button className="cursor-pointer">✎</button>

            {/* delete */}
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

        <span className="flex flex-row text-xs text-gray-500 mt-1">
          {props.duration && <div>{props.duration}</div>}
          {props.institute && (
            <div className="ml-2 text-black">{props.institute}</div>
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

export default EducationComponent;
