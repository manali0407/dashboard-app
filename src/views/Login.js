import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
    overlap:"rectangular"
  },
}));

const Login = () => {
  const classes = useStyles();
  // const [field, setField] = React.useState("");
  // const [pass, setPass] = React.useState("");
  const [postdata, setPostdata] = useState({});
  const [text, setText] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setText({ ...text, [name]: value });
    console.log(text);
  };

  // async function postResult() {
  //   const result = await axios
  //     .post("http://restapi.adequateshop.com/api/authaccount/login")
  //     .then((response) => {
  //       console.log(response);
  //       setPostdata(response?.data?.id);
  //     });
  // }
  async function postResult() {
    const result = await axios
      .post("http://restapi.adequateshop.com/api/authaccount/login", {
        email: text.email,
        password: text.password,
      })
      .then(
        (response) => {
          setPostdata(response?.data);
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  const navigate = useNavigate();
  const handleSubmit = () => {
    // event.preventDefault();
    postResult();
    return navigate("/home");
  };
  // const handleInput = (event) => {
  //   setField(event.target.value);
  // };
  // const handleInputPass = (event) => {
  //   setPass(event.target.value);
  // };

  // Validation Schema

  const validate = Yup.object({
    email: Yup.string().max(50).required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: validate,
  //   onSubmit(values) {
  //     handleSubmit();
  //     console.log(values);
  //   },
  // });
  // const { errors, touched, getFieldProps } = formik;

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
            Login
          </Typography>

          <Box p={3}>
            <div>
              {/* <FormikProvider 
              // value={formik}>
                <Form> */}
              <Box p={2}>
                <TextField
                  fullWidth
                  name="email"
                  placeholder="Email"
                  value={text.email}
                  onChange={handleChange}
                  // {...getFieldProps("email")}
                  // error={Boolean(touched.email && errors.email)}
                  // helperText={touched.email && errors.email}
                />
              </Box>
              <Box p={2}>
                {/* <label htmlFor="password">Password</label> */}
                <TextField
                  fullWidth
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={text.password}
                  onChange={handleChange}

                  // {...getFieldProps("password")}
                  // error={Boolean(touched.password && errors.password)}
                  // helperText={touched.password && errors.password}
                />
              </Box>
              <Box p={2}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Box>
              {/* </Form>
              </FormikProvider> */}
            </div>
            {/* <div>
              {postdata &&
                postdata.map((item) => {
                  return (
                    <div>
                      <h3>{item.email}</h3>
                      <h3>{item.email}</h3>
                    </div>
                  );
                })}
            </div> */}
            <Box p={2}>
              <Typography color="textSecondary" variant="body1">
                Don&apos;t have an account?
                <Link to="/auth/signup" variant="h6">
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Login;
