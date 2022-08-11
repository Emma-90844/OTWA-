import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesourse";
import { Link } from "react-router-dom";

// Action column
const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link style={{ textDecoration: "none" }} to="/users/anyid">
            <div className="viewButton">View</div>
          </Link>

          <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];

const Datatable = () => {
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
