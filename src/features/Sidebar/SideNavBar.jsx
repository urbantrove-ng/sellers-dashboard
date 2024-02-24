import React, { useState } from "react";
import logo from "../../assets/logos.svg";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaServicestack } from "react-icons/fa6";
import Calendar from "../../components/Calender/Calender";
import Notification from "../../pages/Notifications";
import { MoreVertical } from "lucide-react";

import {
  MessageCircleMore,
  BarChart2,
  PenLine,
  Wallet2,
  Mail,
  Settings,
  SquarePen,
  LayoutGrid,
  HelpCircle,
  GemIcon,
  LogOut,
} from "lucide-react";

const navLinks = [
  { name: "Dashboard", icon: LayoutGrid, path: "/" },
  { name: "Products", icon: PenLine, path: "/myproducts" },
  { name: "Service", icon: FaServicestack, path: "/myservice" },
  { name: "Feedback", icon: MessageCircleMore, path: "/feedback" },
  { name: "Performance", icon: BarChart2, path: "/performance" },
  { name: "Notification", icon: Mail, path: "/notification" },
  { name: "Setting", icon: Settings, path: "/setting" },
  { name: "Wallet", icon: Wallet2, path: "/wallet" },
  { name: "Bid", icon: SquarePen, path: "/bid" },
  { name: "FAQ", icon: HelpCircle, path: "/FAQ" },
  { name: "Premium Service", icon: GemIcon, path: "/preservice" },
];
const varaints = {
  expanded: { width: "15%" },
  nonExpanded: { width: "5%" },
};

export default function SideNavBar() {
  const [activeNav, setActiveNav] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  return (
    <>
      <div className="py-1 flex flex-col border border-r-8  md:w-[20%]  relative  bg-stone-200 ">
        <div className="logo-div flex flex-wrap space-x-0 mt-6  items-center">
          <img src={logo} alt="logo" className="w-16" />
          <span className="block  font-extrabold">Urban Trove</span>
        </div>

        <div className="mt-4 ml-4 flex flex-col space-y-2">
          {navLinks.map((menuItem, index) => (
            <React.Fragment key={index}>
              {/* Main Menu Item */}
              <Link to={menuItem.path} className="text-decoration-none">
                <div
                  className={`flex space-x-3 p-2  rounded ${
                    activeNav === index
                      ? " bg-gray-300  font-bold"
                      : " text-green-800 font-medium"
                  }`}
                >
                  <menuItem.icon />
                  <span className={isExpanded ? "block" : "hidden "}>
                    {menuItem.name}
                  </span>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
        <hr />
        <div className=" flex mt-6 font-extrabold  ">
          <div className="inline-flex">
            <span className=" px-1 h-10 w-20  flex items-center justify-center rounded-3xl text-white bg-black p-2  ">
              <LogOut />
            </span>
            <span className="flex mt-2 ml-4 ">
              <h1>Logoout</h1>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export const RightSideBar = () => {
  return (
    <>
      <div
        className="hidden md:block w-1/4 p-2 shadow absolute right-0 mt-10"
        style={{ background: "CCC1BE" }}
      >
        {/* Sidebar */}
        <div className=" md:block bg-gray-200  shadow">
          {/* Your calendar content goes here */}
          <h2 className="text-2xl font-semibold ml-2"> Calendar</h2>
          <Calendar />
          {/* Add your calendar components and styling here */}
        </div>

        {/* Main Content */}
        <div className=" ">
          <div className="text-2xl font-semibold mb-4 flex">
            Activities
            <span className=" ">
              {" "}
              <MoreVertical />
            </span>
          </div>
          <Notification />
          {/* Add your main content components and styling here */}
        </div>
      </div>
    </>
  );
};
