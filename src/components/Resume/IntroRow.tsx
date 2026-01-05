import type { personalInfoType } from "../../types/personalInfo.type"

function IntroRow(props:personalInfoType){
    return <>
    <div className="w-full pl-10 h-[7%] bg-[#24303c] flex flex-col justify-end ">
        <h2 className="text-xl text-white font-bold">{props.name}</h2>
        <h3 className="text-2xl text-white font-bold">{props.position}</h3>
    </div>
    </>
}

export default IntroRow
