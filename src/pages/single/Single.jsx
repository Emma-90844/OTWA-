import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {/* top */}
        <div className="top">
          <div className="left">
            <div className="editButton">Edit..</div>
            <h1 className="title">Information</h1>
            {/* item */}
            <div className="item">
              <img
                src="https://thumbs.dreamstime.com/b/passport-photo-serious-african-american-young-adult-woman-isolated-white-background-cut-out-239195383.jpg"
                alt=""
                className="itemImg"
              />
              {/* details */}
              <div className="details">
                <h1 className="itemTitle">Lona Williams</h1>

                {/* item 1 */}
                <div className="detailItem">
                  <span className="itemKey">Email:</span> {"  "}
                  <span className="itemValue">lonaWilliam@icloud.com</span>
                </div>
                {/* item 1 */}
                <div className="detailItem">
                  <span className="itemKey">Phone:</span> {"  "}
                  <span className="itemValue">+256 788 413223</span>
                </div>

                {/* item 1 */}
                <div className="detailItem">
                  <span className="itemKey">Address: </span> {"  "}
                  <span className="itemValue">
                    kampala-Muyenga 23 Kennan Close
                  </span>
                </div>

                {/* item 1 */}
                <div className="detailItem">
                  <span className="itemKey">Country: </span> {"  "}
                  <span className="itemValue">Uganda</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)"/>
          </div>
        </div> 

        {/* bottom */}
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table/>
        </div>
      </div>
    </div>
  );
};

export default Single;
