import { useState } from "react";
import type { personalInfoType } from "../../types/personalInfo.type";
import EditIcon from "../Icons/EditIcon";
import IntroRowModal from "../Modals/IntroRowModal";

// type IntroRowProps = personalInfoType & {
//    personalInfo: personalInfoType;
//   // onEdit?: (updated: { name: string; position: string }) => void;
//     onEdit?: (updated: personalInfoType) => void;

// };


type IntroRowProps = {
  personalInfo: personalInfoType;
  onEdit?: (updated: personalInfoType) => void;
};

function IntroRow(props: IntroRowProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    
      <div className="w-full pl-10 h-[7%] bg-[#24303c] flex flex-col justify-end group relative">
        <h2 className="text-xl text-white font-bold">{props.personalInfo.name}</h2>

        <div className="flex items-center gap-2">
          <h3 className="text-2xl text-white font-bold">{props.personalInfo.position}</h3>

        
          <div className="opacity-0 group-hover:opacity-100">
            <div className="bg-black flex text-white w-25 h-5 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-2 text-sm flex items-center gap-1"
              >
                <EditIcon />
                <span>EDIT</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <IntroRowModal
        isOpen={isModalOpen}
        // name={props.name}
        // position={props.position}
        personalInfo={props.personalInfo} 
        onClose={() => setIsModalOpen(false)}
        onSave={(updated:any) => {
          props.onEdit?.(updated);
          setIsModalOpen(false);
        }}
      />
    </>
  );
}

export default IntroRow;
