import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Feedback from "./pages/Feedback";
import Performance from "./pages/Performance";
import PremiumService from "./pages/PremiumService";
import UserProduct from "./pages/UserProduct";
import Wallet from "./pages/Wallet";
import Faq from "./pages/Faq";
import Bid from "./pages/Bid";
import Services from "./pages/Services";
import Header from "./features/Header";
import SideNavBar from "./features/Sidebar/SideNavBar";
//import RightSideBar from "";
import { RightSideBar } from "./features/RightSideBar/RightSideBar";

export default function ProjectRoutes() {
  return (
    <>
      <Router>
        <div className="flex flex-col-2 ">
          <SideNavBar />

          <main className="grow">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Setting" element={<Settings />} />
              <Route path="/notification" element={<Notifications />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/preservice" element={<PremiumService />} />
              <Route path="/myproducts" element={<UserProduct />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/myservice" element={<Services />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bid" element={<Bid />} />
            </Routes>{" "}
          </main>
        </div>
      </Router>
    </>
  );
}
