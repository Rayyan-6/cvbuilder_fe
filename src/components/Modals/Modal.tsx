import { useState } from "react";
import type { SubSection } from "../Resume Component/GeneralComponent";
import { v4 as uuidv4 } from "uuid";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  sectionData: SubSection[] | null;
  onAdd: (newItem: SubSection) => void;
};

function Modal(props: ModalProps) {
  if (!props.isOpen || !props.sectionData || props.sectionData.length === 0) return null;

  const firstItem = props.sectionData[0];

  const fields = Object.keys(firstItem).filter((key) => key !== "id");

  const [formValues, setFormValues] = useState<Record<string, string>>(
    fields.reduce(
      (acc, key) => {
        acc[key] = "";
        return acc;
      },
      {} as Record<string, string>
    )
  );

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdd = () => {
    if (!formValues.heading) return alert("Heading is required");

    const newItem: SubSection = {
      id: uuidv4(),
      heading: formValues.heading,
      description: formValues.description,
      designation: formValues.designation,
      company: formValues.company,
      icon: formValues.icon,
      iconDesc: formValues.iconDesc,
    };
    props.onAdd(newItem);
    props.onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
      <div className="bg-white rounded-lg p-6 relative w-150 h-150 ">
        {/* main column */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-row  justify-between align-middle items-center ">
            <div className="h-10 w-25 justify-center items-center align-middle flex flex-col">
              ✍️ Adjouter
            </div>

            {/* buttons container */}
            <div className="flex flex-row justify-center">
              <button
                onClick={props.onClose}
                className="cursor-pointer h-10 w-25 font-bold text-black mr-5"
              >
                CANCEL
              </button>

              <button
                onClick={handleAdd}
                className=" cursor-pointer h-10 w-25 bg-pink-500 text-white font-bold"
              >
                + ADD
              </button>
            </div>
          </div>

          {/* main content in modal */}
          <div className="flex flex-col h-full my-5">
            {fields.map((field) => (
              <div key={field} className="flex flex-col mb-4">
                <label className="text-sm font-semibold capitalize">
                  {field}
                </label>
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder={`Enter ${field}`}
                  value={formValues[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
              </div>
            ))}
          </div>

          {/* bottom row of modal */}
          <div className="flex flex-row justify-center">
            <button
              onClick={props.onClose}
              className="cursor-pointer h-10 w-25 font-bold text-black mr-5"
            >
              CANCEL
            </button>

            <button
              onClick={handleAdd}
              className=" cursor-pointer h-10 w-25 bg-pink-500 text-white font-bold"
            >
              + ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
