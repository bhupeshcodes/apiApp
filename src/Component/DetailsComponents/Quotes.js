import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { mainContext } from "../../Contexts/MainContext";

const Quotes = () => {
  const { quotes, setQuotes, Character } = useContext(mainContext);
  useEffect(() => {
    {/*......Loading Quote by author name......*/}
    const NameArr = Character.name.split(" ", 2);
    axios
      .get(
        `https://www.breakingbadapi.com/api/quote?author=${NameArr[0]}+${NameArr[1]}`
      )
      .then((res) => {
        setQuotes(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setQuotes, Character.name]);

  return (
    <div>
      {quotes !== "" ? (
        quotes.lenth !== 0 ? (
          quotes.map((quote) => (
            <Grid item xs={12} md={12} lg={12} key={quote.quote_id}>
              <div style={{ color: "white" }}>{quote.quote}</div>
            </Grid>
          ))
        ) : (
          <Grid item xs={12} md={12} lg={12}>
            <div style={{ color: "white" }}>No quote to Display</div> 
          </Grid>
        )
      ) : null}
    </div>
  );
};

export default Quotes;
