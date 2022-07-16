import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DownloadIcon from "@material-ui/icons/CloudDownload";
import { CSVLink } from "react-csv";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: "Krystal", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DataTable = () => {
  const camelCase = (str) => {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  };

  const filterColumns = (data) => {
    // Get column names
    const columns = Object.keys(data[0]);
    let headers = [];
    columns.forEach((col) => {
      if (col !== "firstname") {
        // OR if (idx !== 0)
        headers.push({ label: camelCase(col), key: col });
      }
    });

    return headers;
  };

  return (
    <div>
      <Card>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <CardHeader
            titleTypographyProps={{ variant: "h4" }}
            title="User List"
            subheader="this is subheader example"
          />
          <IconButton style={{ color: "black", fontSize: "15px" }}>
            <DownloadIcon />
            <CSVLink
              data={rows}
              headers={filterColumns(rows)}
              filename={"UserInfo.pdf"}
              style={{ color: "black" }}
            >
              Download File
            </CSVLink>
          </IconButton>
        </div>
        <CardContent>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              checkboxSelection
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataTable;
