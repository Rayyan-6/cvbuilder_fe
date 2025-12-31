import PersonalDetailItem from './personalDetailItem'
import personalDetailItem from './personalDetailItem'

function PersonalDetails(){

    return <>
    <div className=' w-full ]'>
        <PersonalDetailItem value='01112223333'/>
        <PersonalDetailItem value='johndoe@gmail.com'/>
        <PersonalDetailItem value='Driving License'/>
        </div>
        {/* <PersonalDetailItem value='Personal Vehicle'/>
        <PersonalDetailItem value='Wales'/>
        <PersonalDetailItem value='01/01/01'/> */}
    </>
}

export default PersonalDetails