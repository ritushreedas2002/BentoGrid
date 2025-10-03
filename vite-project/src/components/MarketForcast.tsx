import { MdArrowOutward } from "react-icons/md";
import { BarPatternChart } from "./ui/bar-pattern-chart";
import { IoMdTrendingUp } from "react-icons/io";

const data = [
  { year: "2023", text: "Digital adoption rises" },
  { year: "2024", text: "Green energy growth" },
  { year: "2025", text: "AI transforms markets" },
  { year: "2026", text: "Metaverse commerce expands" }
];


function ProgressBar() {
  const progress = 50.21; 

  return (
    <div className="w-full mt-4">
      <p className="text-black font-medium mb-1">+{progress}%</p>
      <div
        className="w-3 h-3 rounded-full bg-green-300"
        style={{ marginLeft: `calc(${progress}% - 2%)` }}
      ></div>

      <div className="relative w-full h-10 rounded-xl border border-black overflow-hidden">
        
        <div
          className="h-full bg-gray-400"
          style={{ width: `${progress}%` }}
        >
          <div className="h-full bg-gray-300 bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(0,0,0,0.2)_3px,rgba(0,0,0,0.5)_5px)]" />
        </div>
      </div>
    </div>
  );
}

const Marketforecast = () => {
  return (
    <div className="flex h-full"> 
      {/* Left Column */}
      <div className="w-1/2 flex flex-col ml-5 relative">

        {/* Timeline line */}
        <div className="absolute left-9 top-16 bottom-0 w-[2px] h-[60%] bg-gray-400"></div>
        <div className="flex gap-6 mt-7">
          <div className="ml-5 flex justify-center items-center w-9 h-9 rounded-full bg-green-200 shadow-md relative z-10">
            <IoMdTrendingUp className="text-black text-2xl" />
          </div>
        <div className="text-xl flex flex-col w-28 text-left font-bold text-gray-600">
          <span className="text-xl">Market</span>
          <span className="text-xl">Forecast</span>
        </div>
      </div>
      {data.map((item, key) => (
        <div className="flex gap-7 mt-7 ml-5" key={key}>
          <div className={`ml-4 flex justify-center items-center w-4 h-4 rounded-full border border-black shadow-md relative right-2 z-10 ${key===data.length-1?"bg-black":"bg-white"}`}>
          
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xl font-bold text-gray-600">{item.year}</span>
            <span className="text-sm text-gray-400">{item.text}</span>
          </div>
        </div>
      ))}
    </div>


      {/* Right Column */}
      <div className="w-1/2 flex flex-col gap-2  p-5">
      {/*second box*/}
        <div className="bg-violet-300 rounded-3xl flex flex-col p-2 justify-between h-1/2">
          
            <div className="flex justify-between mt-2 px-2">
                <div className="text-sm">
                     Market Column forecast
                    <h1 className="text-3xl mr-10">12349$</h1>
                </div>
                <div>
                    <MdArrowOutward className="text-xl" />
                </div>
             
            </div>
            <ProgressBar/>
          
        </div>

        <div className="bg-green-300 rounded-3xl flex flex-col p-2 justify-between h-1/2">
          
            <div className="flex justify-between mt-2">
                <div>
                     BTC Price
                    <h1 className="text-3xl ml-2">12349$</h1>
                </div>
                <div>
                    <MdArrowOutward className="text-xl" />
                </div>
             
            </div>
            <div className=" mt-2">
                <BarPatternChart/>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Marketforecast;
