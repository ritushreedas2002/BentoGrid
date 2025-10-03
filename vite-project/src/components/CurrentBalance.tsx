import {  FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { ChartRadialStackedOnly } from "./ui/ChartRadialStacked";
const CurrentBalance=()=>{
    return(
        <div className="flex flex-col gap-2 px-5 py-5">
            <div className="flex justify-between bg-amber-50">
                <div className="text-2xl">
                    Current Balance
                </div>
                <div className="flex gap-2">
                    < FaRegArrowAltCircleLeft className="text-3xl f"/>
                    < FaRegArrowAltCircleRight className="text-3xl"/>
                </div>
            </div>
            <div className="bg-green-300 rounded-4xl flex">
                <div className="w-1/2 flex flex-col px-4">
                    
                        <div className=" mt-6 ml-4 flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md">
                            <IoMdTrendingUp className="text-black text-2xl" />
                        </div>
                        <div className="relative top-20 flex flex-col items-start px-4">
                        <div className="flex gap-2 text-2xl">14% <span className="text-white"><BsArrowUpRightCircleFill /></span></div>
                        <div className="text-sm">Average score: 18,356</div>
                        </div>

                </div>
                <div className="w-1/2 p">
                    <div className="relative top-12"><ChartRadialStackedOnly/></div>   
                </div>
               
            </div>
        </div>
    )
}

export default CurrentBalance;