import { Welcome } from "./components/Welcome";
import DashboardStats from "./components/DashboardStats";
import isss from "../../assets/logos.svg";

import {
  BarChart2,
  GemIcon,
  HelpCircle,
  LayoutGrid,
  Mail,
  MessageCircleMore,
  PenLine,
  Settings,
  SquarePen,
  Wallet2,
} from "lucide-react";
import React from "react";
import { FaServicestack } from "react-icons/fa6";
import { RightSideBar } from "../RightSideBar/RightSideBar";

const statsDatas = [
  { name: "Dashboard", icon: LayoutGrid, path: "/" },
  { name: "Products", icons: PenLine, path: "/myproducts" },
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

const statsData = [
  {
    icon: "📊",
    text: "Service",
    link: "/myservice",
  },
  {
    icon: "📊",
    text: "Feedback",
    link: "/feedback",
  },
  {
    icon: "📉",
    text: "Performance",
    link: "/performance",
  },
  {
    icon: "📆",
    text: "Settings",
    link: "/setting",
  },
  {
    icon: "📊",
    text: "Notification",
    link: "/notification",
  },
  {
    icon: "📉",
    text: "Wallet",
    link: "/wallet",
  },
  {
    icon: "📆",
    text: "Product",
    link: "/myproducts",
  },
  {
    icon: "📊",
    text: "FAQs",
    link: "/FAQ",
  },
  {
    icon: "📉",
    text: "Bid",
    link: "/bid",
  },
  {
    icon: "📆",
    text: "Premium Service",
    link: "/preservice",
  },
  // Add more stats as needed
];
export default function Dash() {
  return (
    <>
      <div>
        {/** ---------------------- Different stats content 1 ------------------------- */}

        <div className="flex lg:grid-cols-2 mt-4 grid-cols-1 gap-3">
          <Welcome />
        </div>
        {/** ---------------------- Different stats content 1 ------------------------- */}
        <div className="flex  ">
          <DashboardStats stats={statsData} />
        </div>

        {/** ---------------------- User source channels table  ------------------------- */}
      </div>
    </>
  );
}
