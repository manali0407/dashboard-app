import { lazy } from "react";

import { Navigate } from "react-router-dom";

//import {History} from '../History'
//import { createBrowserHistory } from "history";
const baseUrl = "/";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
const BlankLayout = lazy(() => import("../layouts/BlankLayout/BlankLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Home = lazy(() => import("../views/Home"));

const Error = lazy(() => import("../views/error/error"));
const Login = lazy(() => import("../views/Login"));
const DataTable = lazy(() => import("../views/Table"));
const ProfilePage = lazy(() => import("../views/Profile"));
const ChartPage = lazy(() => import("../views/Chart"));
const Signup = lazy(() => import("../views/Signup"));
const Flights = lazy(() => import("../views/Flights"));
const Table = lazy(() => import("../views/NewTable"));

/*****Routes******/
const ThemeRoutes = [
  {
    path: baseUrl,
    element: <FullLayout />,
    children: [
      { path: "profile", element: <ProfilePage /> },
      { path: "chart", element: <ChartPage /> },
      { path: "flights", element: <Flights /> },
      { path: "table", element: <Table /> },
      { path: "*", element: <Navigate to={`${baseUrl}auth/404`} /> },
    ],
  },
  {
    path: `${baseUrl}auth`,
    element: <BlankLayout />,
    children: [
      { path: "404", element: <Error /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
];

export default ThemeRoutes;
