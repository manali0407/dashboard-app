import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Avatar,
  makeStyles,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Form, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100vh",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  fonts: {
    fontSize: 40,
  },
  badge: {
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: 30,
  },
}));

const Signup = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const handleSubmit = () => {
    return navigate("/home");
  };

  const validate = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().min(12).email("Invalid email address").required(),
    state: Yup.string()
      .oneOf(["Gujarat", "Rajasthan", "Maharashtra"], "Invalid")
      .required(),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required(),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required(),
    gender: Yup.string().required(),
    rememberMe: Yup.boolean()
      .required()
      .oneOf([true], "You must accept the terms and conditions."),
    file: Yup.array().nullable().notRequired().min(1, "at least one upload"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      country: "",
      state: "",
      gender: "male",
      rememberMe: "true",
      file: [],
    },
    validationSchema: validate,
    onSubmit(values) {
      handleSubmit();
      console.log(values);
    },
  });
  const { getFieldProps, errors, touched, values } = formik;
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        textAlign="center"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Avatar className={classes.badge}>M</Avatar>
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
            className={classes.fonts}
          >
            Signup
          </Typography>

          <Box p={2}>
            <FormikProvider value={formik}>
              <Form>
                <Box p={2}>
                  <TextField
                    fullWidth
                    name="username"
                    type="username"
                    placeholder="Username"
                    {...getFieldProps("username")}
                    error={Boolean(touched.username && errors.username)}
                    helperText={touched.username && errors.username}
                  />
                </Box>
                <Box p={2}>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    placeholder="Email"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Box>
                <Box p={2}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="radio-buttons-group"
                      {...getFieldProps("gender")}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box p={2}>
                  <TextField
                    fullWidth
                    name="country"
                    required
                    placeholder="Country"
                    {...getFieldProps("country")}
                  />
                </Box>
                <Box p={2}>
                  <TextField
                    fullWidth
                    label="Select State"
                    select
                    SelectProps={{ native: true }}
                    {...getFieldProps("state")}
                    error={Boolean(touched.state && errors.state)}
                    helperText={touched.state && errors.state}
                  >
                    <option value="Select state" name="Select State">
                      ---Select State---
                    </option>
                    <option value="Gujarat" name="state">
                      Gujarat
                    </option>
                    <option value="Rajasthan" name="state">
                      Rajasthan
                    </option>
                    <option value="Maharashtra" name="state">
                      Maharashtra
                    </option>
                  </TextField>
                </Box>
                <Box p={2}>
                  <TextField
                    fullWidth
                    name="password"
                    type="password"
                    placeholder="Password"
                    {...getFieldProps("password")}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Box>
                <Box p={2}>
                  <TextField
                    fullWidth
                    name="confirmpassword"
                    type="confirmpassword"
                    placeholder="Confirm Password"
                    {...getFieldProps("confirmpassword")}
                    error={Boolean(
                      touched.confirmpassword && errors.confirmpassword
                    )}
                    helperText={
                      touched.confirmpassword && errors.confirmpassword
                    }
                  />
                </Box>

                <Box p={2}>
                  <TextField
                    fullWidth
                    name="file"
                    type="file"
                    {...getFieldProps("file")}
                    error={Boolean(touched.file && errors.file)}
                    helperText={touched.file && errors.file}
                  />
                </Box>

                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.rememberMe}
                        {...getFieldProps("rememberMe")}
                        error={Boolean(touched.rememberMe && errors.rememberMe)}
                        helperText={touched.rememberMe && errors.rememberMe}
                      />
                    }
                    label="Remember Me"
                    name="rememberMe"
                  />
                </FormGroup>
                <Box p={2}>
                  {/* <TextField
                    fullWidth
                    style={{ textDecoration: "none" }}
                    type="checkbox"
                    inputMode={<Checkbox />}
                    label="click"
                    name="rememberMe"
                    {...getFieldProps("rememberMe")}
                   
                  /> */}
                  {/* <FormControlLabel
                    control={
                      <Checkbox
                      checked={values.rememberMe}
                        {...getFieldProps("rememberMe")}
                        error={Boolean(touched.rememberMe && errors.rememberMe)}
                        helperText={touched.rememberMe && errors.rememberMe}
                      />
                    }
                    label="Remember me"
                  /> */}
                </Box>

                <Box p={2}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color={"primary"}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            </FormikProvider>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Signup;
