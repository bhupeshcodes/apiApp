import React, { useContext, useEffect } from "react";
import Axios from "axios";
import {
  Backdrop,
  CardActionArea,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { mainContext } from "../Contexts/MainContext";
import { Card } from "@material-ui/core";
import { useParams } from "react-router-dom";
import DetialsText from "../Component/DetailsComponents/DetialsText";
import Quotes from "../Component/DetailsComponents/Quotes";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperContainer1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    margin: theme.spacing(1),
    width: "40vw",
    height: "80vh",
    marginLeft: "70px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      backgroundColor: "#000",
      margin: theme.spacing(1),
      width: "100vw",
      height: "80vh",
      color: "white",
    },
  },
  paperContainer2: {
    display: "flex",
    backgroundColor: "#000",
    margin: theme.spacing(1),
    width: "53vw",
    height: "80vh",
    color: "white",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      backgroundColor: "#000",
      margin: theme.spacing(1),
      width: "100vw",
      height: "80vh",
      color: "white",
    },
  },
  paperContainer3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    margin: theme.spacing(1),
    width: "100vw",
    height: "80vh",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  card: {
    maxWidth: 345,
    width: 345,
    marginTop: 20,
  },
  media: {
    height: 480,
  },
  heading: {
    color: "#fff",
    fontWeight: "800",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
  },
  DetialsText: {
    padding: "10vh",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
    },
  },
}));

const Details = () => {
  const classes = useStyles();
  const { setCharacter, Character } = useContext(mainContext);
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();
  useEffect(() => {
    {/*......Loading Charecter Datials by their id......*/}
    setLoading(true);
    Axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then((res) => {
        setCharacter(...res.data);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [setCharacter, id]);
  console.log(Character.name);
  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container>
        <Grid
          item
          xs={12}
          className={classes.cardContainer}
          style={{ padding: "50px" }}
        >
          <Typography variant="h2" component="h2" className={classes.heading}>
            {Character.name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          lg={5}
          className={classes.cardContainer}
          style={{ justifyContent: "flex-end" }}
        >
          <Paper elevation={2} className={classes.paperContainer1}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Character.img}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          lg={7}
          className={classes.cardContainer}
          style={{ justifyContent: "flex-start" }}
        >
          <Paper elevation={2} className={classes.paperContainer2}>
            <Grid container className={classes.DetialsText}>
              <DetialsText text="Nickname:" subText={Character.nickname} />
              <DetialsText text="Portrays by:" subText={Character.portrayed} />
              <DetialsText text="Birthday:" subText={Character.birthday} />
              <DetialsText text="Occupation:" subText={Character.occupation} />
              <DetialsText text="Status:" subText={Character.status} />
              <DetialsText
                text="Appearance:"
                subText={`Seasons ${Character.appearance}`}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.cardContainer}>
          <Paper elevation={2} className={classes.paperContainer3}>
            <Grid container className={classes.DetialsText}>
              <Grid item xs={12}>
                <Typography
                  variant="h2"
                  component="h2"
                  className={classes.heading}
                >
                  All Quotes by {Character.name}
                </Typography>
              </Grid>
              {Character !== "" ? <Quotes /> : null}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Details);
