import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      {/* top */}
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} strokeWidth={5} text="70%" />
        </div>
        <p className="title">Total sales soday</p>
        <p className="amount">UGX 000.000</p>
        <p className="desc">
          Previous transactions processing.Last payments may not be included
        </p>

        <div className="summary">
            {/* item 1 */}
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">UGX0M</div>
            </div>
          </div>

             {/* item 1 */}
             <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
                <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">UGX 55,000,00M</div>
            </div>
          </div>

             {/* item 1 */}
             <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">UGX 15,000,00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
