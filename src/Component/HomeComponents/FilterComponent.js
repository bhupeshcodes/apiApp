import {
  alpha,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useContext } from "react";
import { mainContext } from "../../Contexts/MainContext";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "10vh",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 8, 1, 10),
    },
    [theme.breakpoints.down("sm")]: {
      height: "20vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  search: {
    position: "relative",
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(5),
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#fff",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "42ch",
      },
    },
  },
  filter: {
    color: "#fff",
    paddingLeft: theme.spacing(10),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    color: "#fff",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
}));

const FilterComponent = () => {
  const classes = useStyles();
  const { setSearch, category, setCategory, search } = useContext(mainContext);

  return (
    <div className={classes.root}>
      <Grid container>
        {search === "" ? (
          <Grid item xs={5}>
            <FormControl className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  color: "#fff",
                  paddingLeft: 5,
                }}
              >
                Filter
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className={classes.select}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Breaking Bad"}>Breaking Bad</MenuItem>
                <MenuItem value={"Better Call Saul"}>Better Call Saul</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        ) : (
          <Grid item xs={5}></Grid>
        )}
        {category === "" ? (
          <Grid
            item
            xs={7}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </Grid>
        ) : (
          <Grid item xs={7}></Grid>
        )}
      </Grid>
    </div>
  );
};

export default FilterComponent;
