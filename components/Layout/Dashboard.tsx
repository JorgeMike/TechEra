import React from "react";
import HeaderDashboard from "../Dashboard/HeaderDashboard";
import SidebarLeftDashboard from "../Dashboard/SidebarLeftDashboard";
import MainContentDashboard from "../Dashboard/MainContentDashboard";
import SidebarRightDashboard from "../Dashboard/SidebarRightDashboard";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <HeaderDashboard />
      <div className="app-body">
        <SidebarLeftDashboard />
        <div className="app-body-main-content">
          {children}
          {/* <MainContentDashboard /> */}
        </div>
        <div className="app-body-sidebar">
          <SidebarRightDashboard />
        </div>
      </div>
    </div>
  );
}
