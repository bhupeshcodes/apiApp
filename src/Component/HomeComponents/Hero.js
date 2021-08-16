import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import background from "../../Assets/BBhero.jpg";
import poster from "../../Assets/BBPoster2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#000",
    height: "100vh",
    marginTop: -150,
    backgroundImage: `url(${background})`,
    [theme.breakpoints.down("sm")]: {
      height: "80vh",
    },
  },
  banner: {
    height: "70vh",
    width: "50vh",
   
    [theme.breakpoints.up("sm")]: {
      marginTop: 150,
      marginLeft: 330,
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
      width: "250px",
    },
  },
  bannerContainer: {
    height: "95vh",
    backgroundColor: "#000",
    [theme.breakpoints.down("sm")]: {
      height: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  emptyContainer: {
    height: "95vh",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Quote: {
    width: "25vw",
    paddingLeft: 70,
    marginTop: 300,
    fontWeight: "800",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  subQuote: {
    paddingLeft: 70,
    width: "25vw",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  HeroBottom: {
    backgroundColor: "#000",
    height: "5vh",
    width: "100vw",
  },
  HeroBottomText: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={5} lg={5} className={classes.bannerContainer}>
          <img src={poster} alt={poster} className={classes.banner} />
        </Grid>
        <Grid item xs={7} className={classes.emptyContainer}>
          <Typography variant="h4" component="h4" className={classes.Quote}>
            Get all the information about Breaking Bad's characters.
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            style={{ paddingLeft: 70, width: "25vw" }}
            className={classes.subQuote}
          >
            "I am not in danger, Skyler. I am the danger!"{" "}
            <span style={{ fontWeight: "bold", fontSize: "15px" }}>
              ~ Walter White
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.HeroBottom}></Grid>
      </Grid>
    </div>
  );
};

export default Hero;
