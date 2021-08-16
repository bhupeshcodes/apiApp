import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Component/NavComponents/AppBar";
import Footer from "./Component/NavComponents/Footer";
import Details from "./Pages/Details";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="App">
      {/*Navgayio bar......*/}
      <NavBar>
        {/*All Routes......*/}
        <Router>
          {/*Home Route......*/}
          <Route exact path="/" component={Home} />
          {/*Details Page Route......*/}
          <Route path="/:id" component={Details} />
        </Router>
        {/*Footer......*/}
        <Footer />
      </NavBar>
    </div>
  );
};

export default App;
