import { useEffect, useState } from "react";
import type { personalInfoType } from "../../types/personalInfo.type";

type IntroRowModalProps = {
  isOpen: boolean;
  onClose: () => void;
  personalInfo: personalInfoType;
  onSave: (updated: personalInfoType) => void;
};

function IntroRowModal(props: IntroRowModalProps) {
  const [formValues, setFormValues] = useState<personalInfoType>({
    id: "",
    name: "",
    position: "",
    email: "",
    phone: "",
    address: "",
    driving_license: false,
    dob: "",
  });

  useEffect(() => {
    if (props.isOpen && props.personalInfo) {
      setFormValues({ ...props.personalInfo });
    }
  }, [props.isOpen, props.personalInfo]);

  const handleChange = (field: keyof personalInfoType, value: any) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formValues.name.trim()) {
      alert("Name is required");
      return;
    }

    props.onSave({ ...formValues });
    props.onClose();
  };

  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 relative w-150 h-200">
        <div className="flex flex-col justify-between h-full">
          {/* Header */}
          <div className="flex flex-row justify-between items-center">
            <div className="h-10 w-25 flex items-center font-semibold">
              ✍️ Edit Intro
            </div>

            <div className="flex">
              <button
                onClick={props.onClose}
                className="cursor-pointer h-10 w-25 font-bold text-black mr-5"
              >
                CANCEL
              </button>

              <button
                onClick={handleSave}
                className="cursor-pointer h-10 w-25 bg-pink-500 text-white font-bold"
              >
                SAVE
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col h-full my-5">
            {/* Name */}
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold">Name</label>
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Enter your name"
                value={formValues.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            {/* Position */}
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold">Position</label>
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Enter your position"
                value={formValues.position}
                onChange={(e) => handleChange("position", e.target.value)}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-row justify-center">
            <button
              onClick={props.onClose}
              className="cursor-pointer h-10 w-25 font-bold text-black mr-5"
            >
              CANCEL
            </button>

            <button
              onClick={handleSave}
              className="cursor-pointer h-10 w-25 bg-pink-500 text-white font-bold"
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroRowModal;
