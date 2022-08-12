import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HubIcon from "@mui/icons-material/Hub";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link style={{ textDecoration: "none" }} to="/">
          <span className="logo">
            OTWA <span className="logotext">UG</span>
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />

            <Link style={{ textDecoration: "none" }} to="/">
              <span>DashBoard</span>
            </Link>
          </li>

          {/* list */}
          <p className="title">LIST</p>
        
          <li>
            <PersonIcon className="icon" />
            <Link style={{ textDecoration: "none" }} to="/users">
              <span>Users</span>
            </Link>
          </li>
          <li>
            <GroupIcon className="icon" />
            <Link style={{ textDecoration: "none" }} to="/products">
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Inventory2Icon className="icon" />
            <span>Orders</span>
          </li>
          <div className="title">USEFUL</div>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartIcon className="icon" />
            <span>Systems Health</span>
          </li>
          <li>
            <SettingsSuggestIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxIcon className="icon" />
            <Link to="/users/048103131-391113">
            <span>Profile</span>
            </Link>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
          <li>
            <HubIcon className="icon" />
            <span>Logs</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
