import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";




import Home from  "./Home";
import About from  "./About";
import Services from  "./Services";
import Contact from  "./Contact";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import { Switch, Route, Link } from "react-router-dom";

const User = () => {
  return(
    <>
    <Navbar/>
   <switch>
       <Route exact path="/Home" component={Home} />
       <Route exact path="/About" component={About} />
       <Route exact path="/Portfolio" component={Portfolio} />
       <Route exact path="/Services" component={Services} />
       <Route exact path="/Contact" component={Contact} />
   </switch>
    </>
  );
};
export default User;