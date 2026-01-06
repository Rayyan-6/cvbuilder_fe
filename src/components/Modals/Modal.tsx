// import { useEffect, useState } from "react";
// import type { SubSection } from "../Resume Component/GeneralComponent";
// import { v4 as uuidv4 } from "uuid";

// type ModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   sectionData: SubSection[] | null;
//   onAdd: (newItem: SubSection) => void;
//   onEdit: (updatedItem: SubSection) => void;
//   editedItem?: SubSection | null;
//   isPersonalDetails?: boolean;
//   isIntroRow?: boolean;
// };

// function Modal(props: ModalProps) {
//   const firstItem = props.sectionData?.[0];
//   const fields = firstItem
//     ? Object.keys(firstItem).filter((key) => {
//         if (props.isIntroRow) {
//           return ["name", "position"].includes(key);
//         }
//         if (props.isPersonalDetails) {
//           return !["id", "heading", "description"].includes(key);
//         }
//         return key !== "id";
//       })
//     : [];

//   const [formValues, setFormValues] = useState<Record<string, string>>({});

//   useEffect(() => {
//     if (props.editedItem) {
//       const { id, ...rest } = props.editedItem;
//       const values: Record<string, string> = {};
//       Object.keys(rest).forEach((key) => {
//         values[key] = (rest as Record<string, string | undefined>)[key] || "";
//       });
//       setFormValues(values);
//     } else if (props.sectionData && props.sectionData.length > 0) {
//       const firstItem = props.sectionData[0];
//       const fields = Object.keys(firstItem).filter((key) => key !== "id");
//       const values: Record<string, string> = {};
//       fields.forEach((key) => {
//         values[key] = "";
//       });
//       setFormValues(values);
//     }
//   }, [props.editedItem, props.sectionData]);

//   const handleChange = (field: string, value: string) => {
//     setFormValues((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleAdd = () => {
//     if (!formValues.heading) return alert("Heading is required");

//     if (props.editedItem) {
//       props.onEdit({
//         ...props.editedItem,
//         ...formValues,
//       });
//     } else {
//       props.onAdd({
//         id: uuidv4(),
//         ...formValues,
//       } as SubSection);
//     }

//     props.onClose();
//   };

//   console.log("section data-----", props.sectionData);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
//       <div className="bg-white rounded-lg p-6 relative w-150 h-200 ">
//         {/* main column */}
//         <div className="flex flex-col justify-between h-full">
//           <div className="flex flex-row  justify-between align-middle items-center ">
//             <div className="h-10 w-25 justify-center items-center align-middle flex flex-col">
//               ✍️ Adjouter
//             </div>

//             {/* buttons container */}
//             <div className="flex flex-row justify-center">
//               <button
//                 onClick={props.onClose}
//                 className="cursor-pointer h-10 w-25 font-bold text-black mr-5"
//               >
//                 CANCEL
//               </button>

//               <button
//                 onClick={handleAdd}
//                 className=" cursor-pointer h-10 w-25 bg-pink-500 text-white font-bold"
//               >
//                 {props.editedItem ? "EDIT" : "+ ADD"}
//               </button>
//             </div>
//           </div>

//           {/* main content in modal */}
//           <div className="flex flex-col h-full my-5">
//             {fields && fields.length !== 0 ? (
//               <>
//                 {fields.map((field) => (
//                   <div key={field} className="flex flex-col mb-4">
//                     <label className="text-sm font-semibold capitalize">
//                       {field}
//                     </label>

//                     {field === "driving_license" ? (
//                       <div className="flex gap-4 mt-2">
//                         <label className="flex items-center gap-1">
//                           <input
//                             type="radio"
//                             name="driving_license"
//                             value="true"
//                             checked={formValues[field] === "true"}
//                             onChange={(e) =>
//                               handleChange(field, e.target.value)
//                             }
//                           />
//                           Yes
//                         </label>

//                         <label className="flex items-center gap-1">
//                           <input
//                             type="radio"
//                             name="driving_license"
//                             value="false"
//                             checked={formValues[field] === "false"}
//                             onChange={(e) =>
//                               handleChange(field, e.target.value)
//                             }
//                           />
//                           No
//                         </label>
//                       </div>
//                     ) : (
//                       <input
//                         type="text"
//                         className="border p-2 rounded"
//                         placeholder={`Enter ${field}`}
//                         value={formValues[field] || ""}
//                         onChange={(e) => handleChange(field, e.target.value)}
//                       />
//                     )}
//                   </div>
//                 ))}
//               </>
//             ) : (
//               <>
//                 <input
//                   type="text"
//                   className="border p-2 rounded"
//                   placeholder={`Enter`}
//                   // onChange={(e) => handleChange(field, e.target.value)}
//                 />
//               </>
//             )}
//           </div>

//           {/* bottom row of modal */}
//           <div className="flex flex-row justify-center">
//             <button
//               onClick={props.onClose}
//               className="cursor-pointer h-10 w-25 font-bold text-black mr-5"
//             >
//               CANCEL
//             </button>

//             <button
//               onClick={handleAdd}
//               className=" cursor-pointer h-10 w-25 bg-pink-500 text-white font-bold"
//             >
//               {props.editedItem ? "EDIT" : "ADD"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;











import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import type { SubSection } from "../Resume Component/GeneralComponent";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newItem: SubSection) => void;
  onEdit: (updatedItem: SubSection) => void;
  editedItem?: SubSection | null;
};

const FIELDS: (keyof SubSection)[] = [
  "heading",
  "description",
  "designation",
  "company",
  "icon",
  "iconDesc",
];

function StaticSubSectionModal({ isOpen, onClose, onAdd, onEdit, editedItem }: ModalProps) {
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const initialValues: Record<string, string> = {};
    FIELDS.forEach((key) => {
      initialValues[key] = editedItem?.[key] || "";
    });
    setFormValues(initialValues);
  }, [editedItem]);

  if (!isOpen) return null;

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const newItem: SubSection = editedItem
      ? { ...editedItem, ...formValues }
      : { id: uuidv4(), ...formValues } as SubSection;

    if (editedItem) onEdit(newItem);
    else onAdd(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-[400px] max-h-[90vh] overflow-y-auto flex flex-col justify-between">
        {/* Top row */}
        <div className="flex justify-between items-center mb-4">
          <div className="h-10 flex items-center text-lg font-bold">
            ✍️ {editedItem ? "Edit Item" : "Add Item"}
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="cursor-pointer h-10 px-4 text-sm font-bold border"
            >
              CANCEL
            </button>
            <button
              onClick={handleSubmit}
              className="cursor-pointer h-10 px-4 text-sm bg-pink-500 text-white font-bold"
            >
              {editedItem ? "EDIT" : "+ ADD"}
            </button>
          </div>
        </div>

        {/* Form fields */}
        <div className="flex flex-col gap-3 mb-4">
          {FIELDS.map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-sm font-semibold capitalize">{field}</label>
              <input
                type="text"
                className="border p-2 rounded text-sm"
                placeholder={`Enter ${field}`}
                value={formValues[field]}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Bottom buttons for accessibility (optional duplicate) */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-1 text-sm font-bold border"
          >
            CANCEL
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-1 text-sm bg-pink-500 text-white font-bold"
          >
            {editedItem ? "EDIT" : "ADD"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StaticSubSectionModal;
