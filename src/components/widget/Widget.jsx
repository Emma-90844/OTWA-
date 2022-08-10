import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;
// temporarily
  const amount = 100;
  const diff = 20;



  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlinedIcon className="icon" style={{color:"crimson", backgroundColor:"#dffed9"}} />,
      };
      break;

    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon className="icon" style={{color:"gold", backgroundColor:"#dffed9"}}/>,
      };
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "See details",
        icon: <MonetizationOnOutlinedIcon className="icon" style={{color:"orange", backgroundColor:""}}/>,
      };
      break;

      
    case "balance":
        data = {
          title: "BALANCE",
          isMoney: true,
          link: "View all balance",
          icon: <AccountBalanceOutlinedIcon className="icon" style={{color:"green", backgroundColor:"#dffed9"}} />,
        };
        break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />  
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
