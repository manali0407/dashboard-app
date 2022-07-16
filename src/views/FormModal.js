import { Box, Button, Grid, Modal, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const FormModal = ({ getData }) => {
  const [field, setField] = useState({ name: "", age: "", contactNo: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setField({ ...field, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newVal = { id: new Date().getTime().valueOf(), ...field };

    // newval pass to the parent newtable
    getData(newVal);
    setField({ name: "", age: "", contactNo: "" });
    setOpen(false);
  };

  //modal for adding data
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleClick}>
        ADD
      </Button>

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
      >
        <Box
          sx={{
            height: "35%",
            width: "25%",
            mt: "15%",
            ml: "35%",
            backgroundColor: "white",
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
                  value={field.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  name="age"
                  label="Age"
                  variant="standard"
                  value={field.age}
                  onChange={handleChange}
                  required
                />
                <TextField
                  name="contactNo"
                  label="Contact No"
                  variant="standard"
                  value={field.contactNo}
                  onChange={handleChange}
                  required
                />
                <Button variant="contained" onClick={handleAdd}>
                  SUBMIT
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default FormModal;
