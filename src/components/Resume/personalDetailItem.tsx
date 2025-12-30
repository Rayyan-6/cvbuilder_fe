import { FaPlus } from "react-icons/fa";



type PersonalDetailItemProps={
    value: string
}


function PersonalDetailItem(props: PersonalDetailItemProps){
    return <>
    <div className="flex flex-row  w-[60%] pl-10 pt-1">
       
                <div className='w-50 m-1'> 📩 {props.value}</div>



    <div className='w-50  m-1'> 💬 {props.value}</div>
    
    </div>
    </>
}

export default PersonalDetailItem