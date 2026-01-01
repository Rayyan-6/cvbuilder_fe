import { EnvelopeIcon } from "../Icons/Icons";

type PersonalDetailItemProps = {
  value: string;
};

function PersonalDetailItem(props: PersonalDetailItemProps) {
  return (
    <>
      <div>
        <div className="w-50 m-1 text-xs">
          <EnvelopeIcon />
          {props.value}
        </div>
      </div>
    </>
  );
}

export default PersonalDetailItem;
