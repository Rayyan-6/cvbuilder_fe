import { useEffect, useState } from "react";
import Modal from "../Modals/Modal";
import TrashIcon from "../Icons/TrashIcon";
import PlusIcon from "../Icons/PlusIcon";
import EditIcon from "../Icons/EditIcon";

export type SubSection = {
  id: string;
  heading: string;
  description?: string;
  designation?: string;
  company?: string;
  icon?: string;
  iconDesc?: string;
};

type GeneralComponentProps = {
  title: string;
  data: SubSection[];
  hasBar: boolean;
  onSectionDelete: (title: string) => void;
  onSectionUpdate?: (title: string, items: any[]) => void;
};

function GeneralComponent(props: GeneralComponentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSectionData, setActiveSectionData] = useState<
    SubSection[] | null
  >(null);
  const [items, setItems] = useState<SubSection[]>([]);
  const [editedItem, setEditedItem] = useState<SubSection | null>(null);
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItems(props.data);
  }, [props.data]);

  const handleAddItem = (newItem: SubSection) => {
    console.log("add item called");
    setItems((prevItems) => {
      const updated = [...prevItems, newItem];
      props.onSectionUpdate?.(props.title, updated);
      return updated;
    });
  };

  function handleItemDelete(id: string) {
    setItems((prevItems) => {
      const updated = prevItems.filter((item) => item.id !== id);
      props.onSectionUpdate?.(props.title, updated);
      return updated;
    });
  }

  function handleItemEdit(id: string) {
    const itemToEdit = items.find((item) => item.id === id);
    if (!itemToEdit) return;
    setActiveSectionData([itemToEdit]);
    setEditedItem(itemToEdit);
    setIsModalOpen(true);
  }

  console.log(props.title, props.data, "modal opened----------");

  return (
    <div className="group relative hover:bg-gray-300 mr-7">
      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          // sectionData={activeSectionData}
          onAdd={handleAddItem}
          onEdit={(editedItem: SubSection) => {
            setItems((prev) => {
              const updated = prev.map((item) =>
                item.id === editedItem.id ? editedItem : item
              );
              props.onSectionUpdate?.(props.title, updated);
              return updated;
            });
          }}
          editedItem={editedItem}
        />
      ) : null}

      {/* Header */}
      <div className="flex flex-col">
        <div className="opacity-0 group-hover:opacity-100">
          <div className="bg-black flex text-white w-25 h-5 justify-center">
            <button
              className="px-2 cursor-pointer"
              onClick={() => props.onSectionDelete(props.title)}
            >
              <TrashIcon />
            </button>
            <button
              onClick={() => {
                setEditedItem(null);
                setIsModalOpen(true);
                // setActiveSectionData(props.data);
                setActiveSectionData(null);
              }}
              className="px-2 text-sm flex cursor-pointer"
            >
              <PlusIcon /> <span>ADD</span>
            </button>
          </div>
        </div>

        <h2 className="font-bold text-xl pb-3">{props.title}</h2>
      </div>

      {/* Body */}
      <div className="bg-white ml-5 pl-5 pt-5">
        {items.map((item) => {
          return (
            <InsideComponent
              key={item.id}
              id={item.id}
              heading={item.heading}
              description={item.description}
              designation={item.designation}
              company={item.company}
              onDelete={handleItemDelete}
              onEdit={handleItemEdit}
              hasBar={props.hasBar}
            />
          );
        })}
      </div>
    </div>
  );
}

function InsideComponent(
  props: SubSection & { onDelete: (id: string) => void } & {
    onEdit: (id: string) => void;
  } & { hasBar: boolean }
) {
  return (
    <div className="pb-3 flex flex-row ">
      {props.hasBar && (
        <div className="flex flex-col items-center mr-3">
          {/* Black circle */}
          <div className="w-2 h-2 bg-black rounded-full mb-1"></div>
          {/* Vertical bar */}
          <div className="w-0.5 flex-1 bg-gray-400"></div>
        </div>
      )}

      <div className="flex-1">
        <div className="flex flex-row justify-between ">
          {!props.icon && (
            <div className="font-bold text-xs ">{props.heading}</div>
          )}

          <div className="opacity-0 hover:opacity-100 w-12 h-5 bg-white text-black flex flex-row justify-between">
            <button
              className="cursor-pointer"
              onClick={() => props.onEdit(props.id)}
            >
              <EditIcon />
            </button>
            <button
              className="cursor-pointer"
              onClick={() => props.onDelete(props.id)}
            >
              <TrashIcon />
            </button>
          </div>
        </div>

        {props.icon && (
          <div className="flex flex-row">
            <div className="">{props.icon}</div>
            <div className="ml-3">{props.iconDesc}</div>
          </div>
        )}

        {props.designation && (
          <div className="text-xs ">{props.designation}</div>
        )}
        {props.company && <div className="text-xs">{props.company}</div>}
        {props.description && (
          <div className="text-xs ">{props.description}</div>
        )}
      </div>
    </div>
  );
}

export default GeneralComponent;
