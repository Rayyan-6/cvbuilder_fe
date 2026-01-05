import { useState } from "react";
import type { personalInfoType } from "../../types/personalInfo.type";
import TrashIcon from "../Icons/TrashIcon";
import Modal from "../Modals/Modal";
import type { SubSection } from "../Resume Component/GeneralComponent";
import EditIcon from "../Icons/EditIcon";

function PersonalDetails(props: personalInfoType) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSectionData, setActiveSectionData] = useState<SubSection[] | null>(null);
  const [editedItem, setEditedItem] = useState<SubSection | null>(null);

  const entries = Object.entries(props)
    .filter(([key]) => !["id", "name", "position"].includes(key));

  const combinedSubSection: SubSection = {
    id: "personal-details",
    heading: "Personal Details",
    description: "",
    ...Object.fromEntries(entries.map(([key, value]) => [key, String(value)])),
  } as SubSection;

  return (
    <div className="group relative">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sectionData={[combinedSubSection]} 
        editedItem={combinedSubSection}  
        onEdit={(updatedItem: SubSection) => {
          console.log("Updated item from modal:", updatedItem);
        
        }}
        onAdd={() => {}}
      />

      <div className="opacity-0 group-hover:opacity-100">
        <div className="bg-black flex text-white w-25 h-5 justify-center">
          <button className="px-2">
            <TrashIcon />
          </button>

          <button
            onClick={() => {
              setActiveSectionData([combinedSubSection]);
              setEditedItem(combinedSubSection);
              setIsModalOpen(true);
            }}
            className="px-2 text-sm flex"
          > <EditIcon /> {"  "}
            <span>EDIT</span>
          </button>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 pt-5 ">
        {entries.map(([key, value]) => (
          <PersonalDetailItem key={key} myKey={key} value={value} />
        ))}
      </div>
    </div>
  );
}

type PersonalDetailItemProps = {
  value: string | boolean;
  myKey: string;
};

function PersonalDetailItem(props: PersonalDetailItemProps) {
  return (
    <div>
      <div className="w-50 m-1 text-xs ">
        {props.myKey === "driving_license"
          ? props.value
            ? "Driving License : Yes"
            : "Driving License : No"
          : `${props.myKey}: ${props.value}`}
      </div>
    </div>
  );
}

export default PersonalDetails;
