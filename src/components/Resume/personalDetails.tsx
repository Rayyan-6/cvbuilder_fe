import type { personalInfoType } from "../../types/personalInfo.type";

function PersonalDetails(props: personalInfoType) {
  const entries = Object.entries(props).filter(([key]) => key !== "id").filter(([key]) => key !== "name").filter(([key]) => key !== "position");
  return (
    <>
      <div className=" w-full grid grid-cols-2 pt-5">
        {entries.map(([key, value]) => (
          <PersonalDetailItem key={key} value={value} />
        ))}
      </div>
    </>
  );
}

type PersonalDetailItemProps = {
  value: string | boolean;
};

function PersonalDetailItem(props: PersonalDetailItemProps) {
  return (
    <>
      <div>
        <div className="w-50 m-1 text-xs">
          {typeof props.value === "boolean"
            ? props.value
              ? "Driving License : Yes"
              : "Driving License : No"
            : props.value}
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
