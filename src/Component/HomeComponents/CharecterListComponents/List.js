import {
  Backdrop,
  CircularProgress,
  Grid,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "../../../Contexts/MainContext";
import MediaCard from "./Card";
import PaginationControlled from "./pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pagContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "10vh",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const List = () => {
  const classes = useStyles();
  const { CharacterList, setCharacterList, length, search, category } =
    useContext(mainContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (search === "" && category === "") {
      {/*......Loading List of 10 character......*/}
      setLoading(true);
      axios
        .get(
          `https://www.breakingbadapi.com/api/characters?limit=10&offset=${length}`
        )
        .then((res) => {
          setCharacterList(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else if (search !== "" && category === "") {
      {/*......Loading Charecter list by search Feature......*/}
      axios
        .get(`https://www.breakingbadapi.com/api/characters?name=${search}`)
        .then((res) => {
          setCharacterList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (category !== "" && search === "") {
      {/*......Loading Charecter List by using filter by category feature......*/}
      if (category === "Breaking Bad") {
        axios
          .get(
            "https://www.breakingbadapi.com/api/characters?category=Breaking+Bad"
          )
          .then((res) => {
            setCharacterList(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (category === "Better Call Saul") {
        axios
          .get(
            "https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul"
          )
          .then((res) => {
            setCharacterList(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [length, search, category, setCharacterList]);
  return (
    <>
      <div className={classes.root}>
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Grid container>
          {CharacterList.map((character) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={character.char_id}
              className={classes.cardContainer}
            >
              <MediaCard character={character} />
            </Grid>
          ))}
          <Grid item xs={12} style={{ height: "5vh" }}></Grid>
        </Grid>
      </div>
      {search !== "" || category !== "" ? null : (
        <Grid container>
          <Grid item xs={12} className={classes.pagContainer}>
            <PaginationControlled />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default List;
