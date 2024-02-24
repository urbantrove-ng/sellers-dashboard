import { BarChart2, ChevronDown, Share2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DashboardTopBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex justify-between items-center  bg-neutral-100 ">
      <div className="flex flex-col h-20 font-bold ml-9 justify-center  ">
        Dashboard
        <p className="relative font-normal text-sm">
          Hi, welcome to task management dashboard
        </p>
      </div>
      <div className="flex ml-9 justify-center  ">
        <Link
          to="/myproducts"
          className=" flex  rounded-lg p-2 bg-gray-300  hover:bg-purple-700"
        >
          My Products
          <ChevronDown className="w-6 ml-2" />
        </Link>
        <Link
          to="/performance"
          className="  ml-2 space-x-1 rounded-lg p-2  bg-gray-300  hover:bg-purple-700 "
        >
          <BarChart2 />
        </Link>
      </div>
    </div>
  );
}
