import PersonalDetailItem from './personalDetailItem';

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
      {/* <PersonalDetailItem value='Personal Vehicle'/>
        <PersonalDetailItem value='Wales'/>
        <PersonalDetailItem value='01/01/01'/> */}
    </>
  );
}

export default PersonalDetails;
