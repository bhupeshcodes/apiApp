import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#fff",
    fontWeight: "800",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
  subHeading: {
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
}));

const DetialsText = (props) => {
  const classes = useStyles();
  const { text, subText } = props;
  return (
    <>
      <Grid item xs={6} md={4} lg={3} className={classes}>
        <Typography variant="body1" component="p" className={classes.heading}>
          {text}
        </Typography>
      </Grid>
      <Grid item xs={6} md={8} lg={7}>
        <Typography variant="h6" component="h6" className={classes.subHeading}>
          {subText}
        </Typography>
      </Grid>
    </>
  );
};

export default DetialsText;
