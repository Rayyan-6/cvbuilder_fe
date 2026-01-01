type EducationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function EducationModal(props: EducationModalProps) {
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
      <div className="bg-white rounded-lg p-6 w-[400px] relative h-[50%]">
        <button
          onClick={props.onClose}
          className="absolute top-2 right-2 text-gray-500 cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-2">Add Item</h2>
        <p>This is the education Modal</p>
      </div>
    </div>
  );
}

export default EducationModal;
