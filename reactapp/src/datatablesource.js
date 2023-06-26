export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "contact",
    headerName: "Phone",
    width: 200,
  },
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
  
  {
    field: "Notes",
    headerName: "Notes",
    width: 200,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "User1",
    status: "active",
    email: "user1@gmail.com",
    contact: 9876543210,
  },
  {
    id: 2,
    username: "User2",
    email: "2user@gmail.com",
    status: "passive",
    contact: 9456783210,
  },
  {
    id: 3,
    username: "user3",
    email: "3user@gmail.com",
    status: "pending",
    contact: 6307154928,
  },
  {
    id: 4,
    username: "user4",
    email: "4user@gmail.com",
    status: "active",
    contact: 6307154928,
  },
  {
    id: 5,
    username: "user5",
    email: "5user@gmail.com",
    status: "passive",
    contact: 8340276210,
  },
  {
    id: 6,
    username: "user6",
    email: "6user@gmail.com",
    status: "active",
    contact: 9542094361,
  },
  {
    id: 7,
    username: "user7",
    email: "7user@gmail.com",
    status: "passive",
    contact: 9134275068,
  },
  {
    id: 8,
    username: "user8",
    email: "8user@gmail.com",
    status: "active",
    contact: 7986523410,
  },
  {
    id: 9,
    username: "user9",
    email: "9user@gmail.com",
    status: "pending",
    contact: 9123456780,
  },
  {
    id: 10,
    username: "user10",
    email: "10user@gmail.com",
    status: "active",
    contact: 9012345678,
  },
];
