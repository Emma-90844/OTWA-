export const userRows = [
  {
    id: "1",
    username: "Snow",
    img: "https://thumbs.dreamstime.com/b/passport-photo-serious-african-american-young-adult-woman-isolated-white-background-cut-out-239195383.jpg",
    status: "pending",
    email: "lona@gmail.com",
    age: "26",
  },
  {
    id: "2",
    username: "Snow",
    img: "https://thumbs.dreamstime.com/b/passport-photo-serious-african-american-young-adult-woman-isolated-white-background-cut-out-239195383.jpg",
    status: "pending",
    email: "lona@gmail.com",
    age: "26",
  },
  {
    id: "3",
    username: "Snow",
    img: "https://thumbs.dreamstime.com/b/passport-photo-serious-african-american-young-adult-woman-isolated-white-background-cut-out-239195383.jpg",
    status: "active",
    email: "lona@gmail.com",
    age: "26",
  },
  {
    id: "4",
    username: "Snow",
    img: "https://thumbs.dreamstime.com/b/passport-photo-serious-african-american-young-adult-woman-isolated-white-background-cut-out-239195383.jpg",
    status: "active",
    email: "lona@gmail.com",
    age: "26",
  },
  {
    id: "5",
    username: "Snow",
    img: "https://thumbs.dreamstime.com/b/passport-photo-serious-african-american-young-adult-woman-isolated-white-background-cut-out-239195383.jpg",
    status: "passive",
    email: "lona@gmail.com",
    age: "26",
  },
  {
    id: "6",
    username: "Snow",
    img: "https://thumbs.dreamstime.com/b/passport-photo-serious-african-american-young-adult-woman-isolated-white-background-cut-out-239195383.jpg",
    status: "active",
    email: "lona@gmail.com",
    age: "26",
  },
  {
    id: "7",
    username: "Snow",
    img: "https://thumbs.dreamstime.com/b/passport-photo-serious-african-american-young-adult-woman-isolated-white-background-cut-out-239195383.jpg",
    status: "active",
    email: "lona@gmail.com",
    age: "26",
  },
  {
    id: "8",
    username: "Snow",
    img: "https://thumbs.dreamstime.com/b/passport-photo-serious-african-american-young-adult-woman-isolated-white-background-cut-out-239195383.jpg",
    status: "active",
    email: "lona@gmail.com",
    age: "26",
  },
  {
    id: "9",
    username: "Snow",
    img: "https://thumbs.dreamstime.com/b/passport-photo-serious-african-american-young-adult-woman-isolated-white-background-cut-out-239195383.jpg",
    status: "active",
    email: "lona@gmail.com",
    age: "26",
  },

];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    sortable: false,
    width: 230,
    renderCell: (params) => {
      return (
        <>
          <div className="cellWithImg">
            <img src={params.row.img} alt="" className="cellImg" />
            {params.row.username}
          </div>
        </>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 230 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
