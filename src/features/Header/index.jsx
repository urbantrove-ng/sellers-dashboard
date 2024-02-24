import { Bell, CircleUserRound, DotIcon, Search } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="bg-stone-100 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search here"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <Search />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <div className="relative">
            <Bell />
            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-white">
              <DotIcon />{" "}
              {/* You can replace this with dynamic notification count */}
            </div>
          </div>

          {/* User Image */}
          <div className="relative">
            <CircleUserRound />
            {/* User image goes here */}
          </div>
        </div>
      </nav>
    </div>
  );
}
