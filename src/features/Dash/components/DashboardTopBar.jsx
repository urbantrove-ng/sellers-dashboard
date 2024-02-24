import { ChevronDown, Share2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const periodOptions = [
  { name: "Today", value: "TODAY" },
  { name: "Yesterday", value: "YESTERDAY" },
  { name: "This Week", value: "THIS_WEEK" },
  { name: "Last Week", value: "LAST_WEEK" },
  { name: "This Month", value: "THIS_MONTH" },
  { name: "Last Month", value: "LAST_MONTH" },
];

export default function DashboardTopBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex flex-cols-2 border-t-8  bg-neutral-100 ">
      <div className="flex flex-col h-20 font-bold ml-9 justify-center ">
        Dashboard
        <span className="flex font-normal sm:text-sm">
          Hi, welcome to task management dashboard
        </span>
      </div>
      <div className=" justify-end mr-6 hidden  items-center ">
        <Link
          to="/myproducts"
          className=" flex rounded-xl p-2 bg-gray-300  hover:bg-purple-700"
        >
          My Products
          <span className="flex ">
            <ChevronDown className="w-6 ml-2" />
          </span>
        </Link>
        <Link
          to="/performance"
          className=" flex ml-2 space-x-1 rounded p-2  bg-gray-300  hover:bg-purple-700 "
        >
          <Share2 className="w-7 mr-2" />
        </Link>
      </div>
    </div>
  );
}
