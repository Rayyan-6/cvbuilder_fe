import PersonalDetailItem from "./personalDetailItem";

function PersonalDetails() {
  return (
    <>
      <div className=" w-full grid grid-cols-2 pt-5">
        <PersonalDetailItem value="01112223333" />
        <PersonalDetailItem value="01112223333" />
        <PersonalDetailItem value="johndoe@gmail.com" />
        <PersonalDetailItem value="johndoe@gmail.com" />
        <PersonalDetailItem value="Driving License" />
        <PersonalDetailItem value="Driving License" />
      </div>
    </>
  );
}

export default PersonalDetails;
