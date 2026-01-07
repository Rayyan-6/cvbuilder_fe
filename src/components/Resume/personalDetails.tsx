import { useState } from "react";
import type { personalInfoType } from "../../types/personalInfo.type";
import EditIcon from "../Icons/EditIcon";
import PersonalDetailsModal from "../Modals/PersonalDetailsModal";

function PersonalDetails(
  props: personalInfoType & {
    onEdit: (updatedInfo: personalInfoType) => void;
  }
) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const entries = Object.entries(props).filter(
    ([key]) => !["id", "name", "position", "onEdit"].includes(key)
  );

  return (
    <div className="group relative">
      {/* Actions */}
      <div className="opacity-0 group-hover:opacity-100 absolute right-0 top-0">
        <div className="bg-black flex text-white">
          

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-2 text-sm flex items-center gap-1"
          >
            <EditIcon />
            <span>EDIT</span>
          </button>
        </div>
      </div>

      {/* List */}
      <div className="w-full grid grid-cols-2 pt-5">
        {entries.map(([key, value]) => (
          <PersonalDetailItem key={key} myKey={key} value={value} />
        ))}
      </div>

      {/* Modal */}
      <PersonalDetailsModal
        isOpen={isModalOpen}
        data={props}
        onClose={() => setIsModalOpen(false)}
        onSave={(updated) => {
          props.onEdit(updated);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}

type PersonalDetailItemProps = {
  value: string | boolean | ((...args: any) => any);
  // value: any;
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


export default PersonalDetails
