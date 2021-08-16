import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import logo from "../../Assets/BBlogoWhite.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#000",
    height: "15vh",
    [theme.breakpoints.down("sm")]: {
      height: "5vh",
    },
  },
  logo: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 50,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  grid2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" width="130" height="70" />
          </div>
        </Grid>
        <Grid item xs={8} className={classes.grid}>
          <Typography variant="h6" component="h6">
            copyright &#169; 2021 Demo Project by Bhupesh Singh Chauhan
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className={classes.grid2}>
          <Typography variant="body2" component="p">
            copyright &#169; 2021 Demo Project by Bhupesh Singh Chauhan
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
