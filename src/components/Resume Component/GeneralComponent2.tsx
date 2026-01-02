import { useState } from "react";
import Modal from "../Modals/Modal";
import TrashIcon from "../Icons/TrashIcon";
import PlusIcon from "../Icons/PlusIcon";
import EditIcon from "../Icons/EditIcon";

type SubSection = {
  heading?: string;
  description?: string;
  designation?: string;
  icon?: string;
  iconDesc?: string;
};

type GeneralComponentProps2 = {
  title: string;
  data: any[];
};

function GeneralComponent2(props: GeneralComponentProps2) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="group relative hover:bg-gray-300">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Header */}
      <div className="flex flex-col">
        <div className="opacity-0 group-hover:opacity-100">
          <div className="bg-black flex text-white w-25 h-5 justify-center">
            <button className="px-2">
              <TrashIcon />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-2 text-sm flex"
            >
              <PlusIcon /> <span>ADD</span>
            </button>
          </div>
        </div>

        <h2 className="font-bold text-xl pb-3">{props.title}</h2>
      </div>

      {/* Body */}
      <div className="bg-white ml-5 pl-5 pt-5">
        {props.data.map((item, idx) => {
          return (
            <InsideComponent
              key={idx}
              heading={item.heading}
              description={item.description}
              designation={item.designation}
            />
          );
        })}
      </div>
    </div>
  );
}

function InsideComponent(props: SubSection) {
  return (
    <div className="pb-3 ">
      <span className="flex flex-row justify-between ">
        {!props.icon && (
          <div className="font-bold text-xs ">{props.heading}</div>
        )}

        {/* hover container */}
        <span className="opacity-0 hover:opacity-100 w-12 h-5 bg-white text-black flex flex-row justify-between">
          {/* edit button */}
          <button className="cursor-pointer">
            <EditIcon />
          </button>

          {/* delete dustbin */}
          <button className="cursor-pointer">
            <TrashIcon />
          </button>
        </span>
      </span>

      {props.icon && (
        <div className="flex flex-row">
          <div className="">{props.icon}</div>
          <div className="ml-3">{props.iconDesc}</div>
        </div>
      )}

      {props.designation && <div className="text-xs ">{props.designation}</div>}
      {props.description && <div className="text-xs ">{props.description}</div>}
    </div>
  );
}

export default GeneralComponent2;
