import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        {/* top */}
        <div className="top">
          <h1>{title}</h1>
        </div>

        {/* bottom */}
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://i.pinimg.com/736x/fe/58/d9/fe58d9611609ab08f6c55fecfdb6942c.jpg"
              }
              className="img"
              alt="myimage"
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput fileUpload">
                <label className="label" htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon cla ssName="icon" />
                </label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="file"
                  placeholder="Lona_Wil"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label className="label" htmlFor="">
                    {input.label}
                  </label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
