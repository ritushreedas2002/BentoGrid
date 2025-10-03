import CurrentBalance from "./CurrentBalance";
import Marketforecast from "./MarketForcast";
import Statistics from "./Statistics";
import Transactions from "./Transactions";

const GridLayout=()=>{
    return (
        <div className="flex justify-center items-center">
        <div className="grid grid-cols-[50%_50%] gap-4 w-[90%] m-6">
            <div className="grid grid-rows-2 gap-7">
                <div className="bg-gray-800 h-full rounded-4xl">
                    <Statistics/>
                </div>
                <div className="bg-amber-50 rounded-4xl">
                    <CurrentBalance/>
                </div>
            </div>
            <div className="grid grid-rows-[30%_67%] gap-4">
                <div className="bg-[#EEF1EE] rounded-4xl">
                    <Transactions/>
                </div>
                <div className=" bg-white rounded-4xl">
                    <Marketforecast/>
                </div>
            </div>
        </div>
        </div>
    )
}


export default GridLayout;