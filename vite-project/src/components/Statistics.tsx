import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { ChartBarStacked } from "./ui/stackCharts";

const options = ["Monthly"];

const Statistics = () => {
  return (
    <div className="flex flex-col p-6">
      {/* Title */}
      <div className="flex justify-between">
        <div className="w-4/6 text-white flex flex-col items-start">
          <span className="text-3xl">Sales statistics</span>
          <span className="text-sm text-slate-400">Updated 1 day ago</span>
        </div>

        {/* Dropdown */}
        <div className="w-2/6 text-sm pl-2">
          <select className="border border-slate-50 text-slate-50 rounded-xl px-4 py-1 cursor-pointer">
            {options.map((item, key) => (
              <option key={key} value={item} className="text-black">
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
            {/**Visitor */}
            <div className="w-3/6 text-white">
                <div className="relative top-28 px-2 flex flex-col items-start">
                <div className="flex justify-start gap-1">visitors <span className="text-green-200"><BsArrowUpRightCircleFill /></span></div>
                <div className="text-5xl">2,025</div>
                </div>
            </div>
            {/* Chart */}
            <div className="w-3/6 mt-6">
                <ChartBarStacked/>
            </div>
      </div>
    </div>
  );
};

export default Statistics;
