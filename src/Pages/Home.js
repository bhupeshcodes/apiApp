import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import FilterComponent from "../Component/HomeComponents/FilterComponent";
import Hero from "../Component/HomeComponents/Hero";
import List from "../Component/HomeComponents/CharecterListComponents/List";

const Home = () => {
  return (
    <div>
      {/*Hero Section......*/}
      <Hero />
      {/*Filter Component Section......*/}
      <FilterComponent />
      {/*List Section......*/}
      <List />
    </div>
  );
};

export default withRouter(Home);
