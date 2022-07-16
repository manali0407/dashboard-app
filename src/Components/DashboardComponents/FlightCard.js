/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  // makeStyles,
  Divider,
} from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 250,
//   },
// });
const FlightCard = (props) => {
  // const classes = useStyles;
  return (
    <div>
      {/* <Card className={classes.media} image={props.image} />  */}

      <Card>
        <img
          style={{
            height: "84px",
            width: "200px",
            display: "block ",
            alignItems: "stretch",
            margin: "auto",
          }}
          src={props.image}
        />

        <Divider light />
        <CardContent>
          <Typography color="textSecondary" gutterBottom variant="h6">
            {props.name}
          </Typography>
          <Typography color="textPrimary" variant="h5">
            {props.id}
          </Typography>
          <Typography color="textPrimary" variant="h5">
            {props.country}
          </Typography>
          <Typography color="textPrimary" variant="h5">
            <a
              href={"https://" + props.website}
              target="_blank"
              rel="noreferrer noopener"
            >
              Visit Website
            </a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlightCard;
