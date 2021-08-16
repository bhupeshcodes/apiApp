import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { mainContext } from "../../../Contexts/MainContext";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    color: "#fff"
  },
}));

export default function PaginationControlled() {
  const { setLength } = useContext(mainContext);
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [charactersData, setCharacterData] = React.useState([]);
  const handleChange = (event, value) => {
    setPage(value);
    setLength(value * 10 - 10);
  };
  let count = Math.floor(charactersData.length / 10) + 1;
  useEffect(() => {
    {/*......Loading total list of characters to determine the lenth of pagination......*/}
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((res) => {
        console.log(res.data);
        setCharacterData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Pagination count={count} page={page} onChange={handleChange} color="standard" size="large"/>
    </div>
  );
}
