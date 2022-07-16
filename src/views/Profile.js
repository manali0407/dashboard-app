import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
  Avatar,
  Divider,
  Box,
  Button,
  TextField,
} from "@material-ui/core";
import profileimg from "../assets/images/users/user_1.png";

const useStyles = makeStyles({
  avatar: {
    height: 100,
    width: 100,
    margin: "0 auto",
    marginBottom: 10,
  },
});

const ProfilePage = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: "Jonathan",
    lastName: "Deo",
    email: "jonathan@deo.com",
    phone: "9999999999",
    state: "Gujrat",
    country: "India",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Grid container spacing={3}>
      <Grid item lg={3} md={12} xs={12}>
        <Card elevation={1}>
          <CardContent>
            <Box textAlign="center">
              <Avatar
                alt="Travis Howard"
                className={classes.avatar}
                src={profileimg}
              />
              <Typography variant="h4">Jonathan Deo</Typography>
              <Typography variant="body2">Web Designer</Typography>
            </Box>
          </CardContent>
          <Divider light />
          <CardContent>
            <Button fullWidth size="large" variant="outlined" color="secondary">
              Contact me
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={9} md={12} xs={12}>
        <Card elevation={1}>
          <CardHeader
            titleTypographyProps={{ variant: "h4" }}
            title="Edit Profile"
            subheader="change the setting you want"
          />
          <CardContent>
            <form autoComplete="off" noValidate>
              <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="First name"
                    name="firstName"
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Last name"
                    name="lastName"
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    onChange={handleChange}
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Country"
                    name="country"
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Select State"
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    variant="outlined"
                  >
                    <option placeholder="Select State"></option>
                    <option value="Gujarat"> Gujarat </option>
                    <option value="Rajasthan"> Rajasthan </option>
                    <option value="Maharashtra"> Maharashtra </option>
                  </TextField>
                </Grid>
              </Grid>

              <Box display="flex" justifyContent="flex-start" mt={3}>
                <Button color="primary" variant="contained">
                  Save details
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
