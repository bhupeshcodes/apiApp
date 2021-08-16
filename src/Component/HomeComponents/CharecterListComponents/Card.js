import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";
import { mainContext } from "../../../Contexts/MainContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 345,
    marginTop: 20,
  },
  media: {
    height: 440,
  },
});
const MediaCard = (props, { history }) => {
  const classes = useStyles();
  const { character } = props;
  const { setCharId, setQuotes, setCharacter } = useContext(mainContext);
  const onClickHandler = (event) => {
    {/*......OnClick function to oper details page......*/}
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setCharId(character.char_id);
    setCharacter("");
    setQuotes("");
    props.history.push(`/${character.char_id}`);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={character.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            style={{ fontWeight: 600 }}
          >
            {character.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {character.birthday}
          </Typography>
          <Typography variant="body2" component="h5">
            {character.occupation}
          </Typography>
          <Typography variant="h6" component="h6">
            {character.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/${character.char_id}`}>
          <Button size="small" color="primary" onClick={onClickHandler}>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default withRouter(MediaCard);
