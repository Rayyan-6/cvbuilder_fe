import type { personalInfoType } from "../../types/personalInfo.type";

function PersonalDetails(props: personalInfoType) {
  const entries = Object.entries(props)
    .filter(([key]) => key !== "id")
    .filter(([key]) => !["id", "name", "position"].includes(key));
  return (
    <>
      <div className=" w-full grid grid-cols-2 pt-5 ">
        {entries.map(([key, value]) => (
          <PersonalDetailItem myKey={key} value={value} />
        ))}
      </div>
    </>
  );
}

type PersonalDetailItemProps = {
  value: string | boolean;
  myKey: string;
};

function PersonalDetailItem(props: PersonalDetailItemProps) {
  return (
    <>
      <div>
        <div className="w-50 m-1 text-xs ">
          {props.myKey === "driving_license"
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
