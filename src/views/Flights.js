import axios from "axios";
import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import FlightCard from "../Components/DashboardComponents/FlightCard";

const Flights = () => {
  const [data, setdata] = useState([]);
  // console.log(
  //   data.map((x) => x.logo),
  //   "image from data"
  // );
  useEffect(() => {
    async function getdata() {
      const info = await axios.get(
        "https://api.instantwebtools.net/v1/airlines"
      );
      console.log(info);
      setdata(info.data);
    }
    getdata();
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item lg={4} md={12} xs={12}>
            <FlightCard
              image={item.logo}
              name={item.name}
              country={item.country}
              id={item.id}
              website={item.website}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Flights;
