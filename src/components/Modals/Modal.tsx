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
  // "icon",
  // "iconDesc",
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
