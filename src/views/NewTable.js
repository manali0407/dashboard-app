import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  Box,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import FormModal from "./FormModal";

const cols = [
  { id: 1, label: "Name" },
  { id: 2, label: "Age" },
  { id: 3, label: "Contact No" },
  { id: 4, label: "Update" },
  { id: 5, label: "Delete" },
];

const NewTable = () => {
  const [rows, setRows] = useState([
    { id: 1, name: "Mahir", age: 22, contactNo: 8855677985 },
    { id: 2, name: "Bela", age: 20, contactNo: 7105677985 },
    { id: 3, name: "Kristen", age: 26, contactNo: 9855642987 },
    { id: 4, name: "Kartik", age: 18, contactNo: 8857009437 },
    { id: 5, name: "Aaditya", age: 22, contactNo: 8455679514 },
  ]);

  // data is coming from the formModal
  const handleGet = (data) => {
    // console.log(data, "getData from NewTable");
    setRows([...rows, data]);
  };

  const handleDelete = (id) => {
    const deleteVal = rows?.filter((del) => del.id !== id);
    setRows(deleteVal);
  };

  const [editField, setEditField] = useState({});

  const handleUpdate = (id) => {
    setOpen(true);

    const updateVal = rows?.filter((edit) => edit.id === id);
    updateVal.forEach((x) => setEditField(x));

    // setRows([...rows, updateVal]);
  };

  // const [field, setField] = useState(rows);

  const handleUpdateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditField({ ...editField, [name]: value });
  };

  const handleEdit = () => {
    // setRows(editField);
    setRows([...rows, editField]);
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
  };

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {cols?.map((item) => (
                <TableCell key={item.id}>{item.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.contactNo}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUpdate(item.id)}>UPADTE</Button>
                  {/* <UpdateForm rows={rows} /> */}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <FormModal getData={handleGet} rows={rows} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            height: "35%",
            width: "25%",
            mt: "15%",
            ml: "35%",
            backgroundColor: "white",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            border: "2px solid #000",
          }}
        >
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12}>
              <Stack p={2} spacing={2}>
                <TextField
                  name="name"
                  label="Name"
                  variant="standard"
                  value={editField?.name}
                  onChange={handleUpdateChange}
                  required
                />
                <TextField
                  name="age"
                  label="Age"
                  variant="standard"
                  value={editField?.age}
                  onChange={handleUpdateChange}
                  required
                />
                <TextField
                  name="contactNo"
                  label="Contact No"
                  variant="standard"
                  value={editField?.contactNo}
                  onChange={handleUpdateChange}
                  required
                />
                <Button variant="contained" onClick={handleEdit}>
                  SUBMIT
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default NewTable;
