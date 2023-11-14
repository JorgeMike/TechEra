import HeaderDashboard from "./HeaderDashboard";
import MainContentDashboard from "./MainContentDashboard";
import SidebarLeftDashboard from "./SidebarLeftDashboard";
import SidebarRightDashboard from "./SidebarRightDashboard";
import "./dashboardStyles.css";

export default function Dashboard() {
  return (
    <div className="app">
      <HeaderDashboard />
      <div className="app-body">
        <SidebarLeftDashboard />
        <div className="app-body-main-content">
          <MainContentDashboard />
        </div>
        <div className="app-body-sidebar">
          <SidebarRightDashboard />
        </div>
      </div>
    </div>
  );
}
