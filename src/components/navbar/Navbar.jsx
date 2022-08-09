import "./navbar.scss";
import PageviewIcon from "@mui/icons-material/Pageview";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <PageviewIcon />
        </div>

        <div className="tems">
            <div className="item">
                <LanguageOutlinedIcon/> English
            </div>
            <div className="item">
                < DarkModeOutlinedIcon/> English
            </div>
            <div className="item">
                < FullscreenExitOutlinedIcon/> English
            </div>
            <div className="item">
                < NotificationsOutlinedIcon /> English
            </div>
            <div className="item">
                < ChatBubbleOutlinedIcon/> English
            </div>
            <div className="item">
                < ListOutlinedIcon/> English
            </div>

          
        </div>

      </div>
    </div>
  );
};

export default Navbar;
