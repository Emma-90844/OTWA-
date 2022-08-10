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
          <PageviewIcon  className="icon"/>
        </div>

        <div className="items">
            <div className="item">
                <LanguageOutlinedIcon  className="icon"/> English
            </div>
            <div className="item">
                < DarkModeOutlinedIcon  className="icon"/> 
            </div>
            <div className="item">
                < FullscreenExitOutlinedIcon  className="icon"/> 
            </div>
            <div className="item">
                < NotificationsOutlinedIcon  className="icon"/> 
                <div className="counter">1</div>
            </div>
            <div className="item">
                < ChatBubbleOutlinedIcon  className="icon"/> 
                <div className="counter">3</div>
            </div>
            <div className="item">
                < ListOutlinedIcon  className="icon"/>
            </div>
            <div className="item">
               <img className="avatar" src=" https://i.pinimg.com/564x/bc/75/88/bc75882d906b263fbe0550fe59dc7b21.jpg" alt="" />
            </div>

          
        </div>

      </div>
    </div>
  );
};

export default Navbar;
