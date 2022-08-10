import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: "1",
    product: "Acer Nitro 5",
    img: "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    customer: "Lonna William",
    date: "1 March",
    method: "Cash on Delievery",
    status: "Approved",
  },
  {
    id: "2",
    product: "play Station 4",
    img: "https://www.ubuy.ug/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFQVUQwck0yTkwuX0FDX1NMMTUwMF8uanBn.jpg",
    customer: "Lonna William",
    date: "3 March",
    method: "Cash on Delievery",
    status: "Pending",
  },

  {
    id: "3",
    product: "Asphat 5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseH4DCEV9vJY69aUO2sepaLo7aNivz7KfWRPxacMU2B0MPzWUc-RkXuEHUiErm7OB-Rg&usqp=CAU",
    customer: "Lonna William",
    date: "4 March",
    method: "Cash on Delievery",
    status: "Approved",
  },

  {
    id: "4",
    product: "Dell ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2d3TInQqb0KBB-wUE_1_OB52panyrFrUsZP2ikZfJhfvD7qCJfGo3qShYc8am5FiviyU&usqp=CAU",
    customer: "Lonna William",
    date: "1 March",
    method: "Cash on Delievery",
    status: "Pending",
  },

  {
    id: "5",
    product: "HP notebook",
    img: "https://www.ubuy.ug/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFQVUQwck0yTkwuX0FDX1NMMTUwMF8uanBn.jpg",
    customer: "Lonna William",
    date: "9 March",
    method: "Cash on Delievery",
    status: "Approved",
  },
];

const List = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment</TableCell>
            <TableCell className="tableCell">
               Status
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image"/>
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">{
                 <span className={`status ${row.status}`}>
                 {row.status}
             </span>
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
