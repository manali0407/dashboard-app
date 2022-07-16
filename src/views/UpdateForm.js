// import React, { useState } from "react";
// import { Box, Button, Grid, Modal, Stack, TextField } from "@mui/material";

// const UpdateForm = ({ rows }) => {
//   const [field, setField] = useState(rows);

//   console.log(rows, "rows");

//   const handleChange = () => {};

//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     // setOpen(false);
//   };
//   return (
//     <div>
//       <Box>
//         <Button variant="contained" onClick={handleClick}>
//           UPADTE
//         </Button>
//         <Modal
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//           open={open}
//           onClose={handleClose}
//         >
//           <Box
//             sx={{
//               height: "35%",
//               width: "25%",
//               mt: "25%",
//               ml: "35%",
//               display: "flex",
//               // alignItems: "center",
//               justifyContent: "center",
//               border: "2px solid #000",
//             }}
//           >
//             <Grid container spacing={3}>
//               <Grid item lg={12} md={12} sm={12}>
//                 {field?.map((item) => {
//                   <Stack p={2} spacing={2}>
//                     <TextField
//                       name="name"
//                       label="Name"
//                       variant="standard"
//                       value={field.name}
//                       onChange={handleChange}
//                       required
//                     />
//                     <TextField
//                       name="age"
//                       label="Age"
//                       variant="standard"
//                       value={field.age}
//                       onChange={handleChange}
//                       required
//                     />
//                     <TextField
//                       name="contactNo"
//                       label="Contact No"
//                       variant="standard"
//                       value={field.contactNo}
//                       onChange={handleChange}
//                       required
//                     />
//                     <Button variant="contained">SUBMIT</Button>
//                   </Stack>;
//                 })}
//               </Grid>
//             </Grid>
//           </Box>
//         </Modal>
//       </Box>
//     </div>
//   );
// };

// export default UpdateForm;


