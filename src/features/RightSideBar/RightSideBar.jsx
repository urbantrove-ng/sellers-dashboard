import React from "react";
import Calendar from "../../components/Calender/Calender";
import Notification from "../../pages/Notifications";
import { ChevronDown, MoreVertical } from "lucide-react";

export const RightSideBar = () => {
  return (
    <>
      <div className="">
        <div className="hidden md:block w-1/5 p-4 border-l">
          <div className=" flex text-lg font-bold ">
            Calendar <ChevronDown className="relative " />
          </div>
          <div className="p-4">
            <Calendar />
          </div>
        </div>

        <div className=" shadow-lg p-4  ">
          <div className=" flex text-lg font-bold mb-2">
            Activities
            <p className="flex  space-x-5 ml-4">View All</p>
          </div>
          {/* fech notification here */}
          <Notification />
        </div>
      </div>
    </>
  );
};
