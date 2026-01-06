import { useState, useEffect } from "react";
import type { personalInfoType } from "../../types/personalInfo.type";

type Props = {
  isOpen: boolean;
  data: personalInfoType;
  onClose: () => void;
  onSave: (updated: personalInfoType) => void;
};

function PersonalDetailsModal({ isOpen, data, onClose, onSave }: Props) {
  const [form, setForm] = useState<personalInfoType>(data);

  useEffect(() => {
    setForm(data);
  }, [data]);

  if (!isOpen) return null;

  const handleChange = (key: keyof personalInfoType, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 relative w-150 h-200 flex flex-col justify-between">
        {/* Header row */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-bold">Edit Personal Details</div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1 text-sm font-bold text-black border"
            >
              CANCEL
            </button>
            <button
              onClick={() => onSave(form)}
              className="px-4 py-1 text-sm font-bold bg-pink-500 text-white"
            >
              SAVE
            </button>
          </div>
        </div>

        {/* Form fields */}
        <div className="flex flex-col gap-4 overflow-y-auto">
          {["email", "phone", "address", "dob"].map((key) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-semibold capitalize">{key}</label>
              <input
                type="text"
                className="border p-2 rounded"
                value={form[key as keyof personalInfoType] as string}
                onChange={(e) => handleChange(key as keyof personalInfoType, e.target.value)}
              />
            </div>
          ))}

          {/* Driving License */}
          <div className="flex gap-4 items-center mt-2">
            <span className="text-sm font-semibold">Driving License:</span>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="driving_license"
                value="true"
                checked={form.driving_license === true}
                onChange={() => handleChange("driving_license", true)}
              />
              Yes
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="driving_license"
                value="false"
                checked={form.driving_license === false}
                onChange={() => handleChange("driving_license", false)}
              />
              No
            </label>
          </div>
        </div>

        {/* Optional bottom row (same as header row buttons, can remove if redundant) */}
        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={onClose}
            className="px-4 py-1 text-sm font-bold text-black border"
          >
            CANCEL
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-4 py-1 text-sm font-bold bg-pink-500 text-white"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailsModal;
