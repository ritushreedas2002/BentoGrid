import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SlBubbles } from "react-icons/sl";
import { FiMoreVertical } from "react-icons/fi";

const Transactions = () => {
  const users = [
    "https://github.com/shadcn.png",
    "https://github.com/octocat.png",
  ];

  return (
    <div className="p-6 flex flex-col justify-between gap-11">
      <div className="flex items-center gap-6">

          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <SlBubbles className="text-white text-xl" />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-2xl font-semibold text-gray-900">
              Recent Transactions
            </h1>
            <span className="text-sm text-gray-500">Sell currency</span>
          </div>

        {/* Avatars */}
        <div className="flex ml-16">
          {users.map((user, idx) => (
            <Avatar key={idx} className="w-10 h-10 ring-2 ring-white">
              <AvatarImage src={user} />
              <AvatarFallback>{user[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>

      
      <div className="flex items-center justify-between bg-gray-200 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
            <SlBubbles className="text-white text-lg" />
          </div>
          <span className="text-gray-800 font-medium">12,53 ETH / BTC</span>
        </div>
        <FiMoreVertical className="text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Transactions;
