type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Modal(props: ModalProps) {
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
      <div className="bg-white rounded-lg p-6 relative w-150 h-150 ">

        {/* main column */}
        <div className="flex flex-col">
        <div className="flex flex-row  justify-between align-middle items-center bg-amber-300">
          <div className="h-10 w-25 justify-center items-center align-middle flex flex-col">✍️ Adjouter</div>

          {/* buttons container */}
          <div className="flex flex-row justify-center">
            <button
              onClick={props.onClose}
              className="cursor-pointer h-10 w-25 font-bold text-black mr-5"
            >
              CANCEL
            </button>

            <button
          
          className=" cursor-pointer h-10 w-25 bg-pink-500 text-white font-bold"
        >
          + ADD
        </button>
          </div>
        </div>

        {/* main content in modal */}
        <div>

        </div>


        {/* bottom row of modal */}
        <div className="flex flex-row">
          <button
              onClick={props.onClose}
              className="cursor-pointer h-10 w-25 font-bold text-black mr-5"
            >
              CANCEL
            </button>

            <button
          
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
