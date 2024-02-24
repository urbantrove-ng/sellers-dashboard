import React from "react";
import Calendar from "../../components/Calender/Calender";
import Notification from "../../pages/Notifications";
import { MoreVertical } from "lucide-react";

export const RightSideBar = () => {
  return (
    <>
      <div className="">
        <div className="hidden md:block w-1/5 p-4 border-l">
          <h2 className="text-lg font-bold mb-2"> Calendar</h2>
          <Calendar />
        </div>

        <div className="bg-white shadow-lg p-4  ">
          <div className="text-lg font-bold mb-2">
            Activities
            <span className=" ">
              {" "}
              <MoreVertical />
            </span>
          </div>
          <Notification />
        </div>
      </div>
    </>
  );
};
