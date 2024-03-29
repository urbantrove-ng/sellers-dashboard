import React from "react";
import Dash from "../features/Dash/dash";
import { RightSideBar } from "../features/RightSideBar/RightSideBar";
import DashboardTopBar from "../features/Dash/components/DashboardTopBar";

export default function Dashboard() {
  return (
    <>
      <DashboardTopBar />
      <div className="flex flex-col-2 border  bg-stone-200">
        <Dash />
        <div className=" grow hidden md:block  w-5/12 mt-9">
          <RightSideBar />
        </div>
      </div>
    </>
  );
}
