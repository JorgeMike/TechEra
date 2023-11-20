import React from "react";
import HeaderDashboard from "../Dashboard/HeaderDashboard";
import SidebarLeftDashboard from "../Dashboard/SidebarLeftDashboard";
import MainContentDashboard from "../Dashboard/MainContentDashboard";
import SidebarRightDashboard from "../Dashboard/SidebarRightDashboard";
import "../Dashboard/dashboardStyles.css";

export interface ILink {
  name: string;
  route: string;
}

interface IDashboardProps {
  children: React.ReactNode;
  links: ILink[];
  user: string;
}

export default function Dashboard({ children, links, user }: IDashboardProps) {
  return (
    <div className="app">
      <HeaderDashboard user={user}/>
      <div className="app-body">
        <SidebarLeftDashboard links={links} user={user}/>
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
