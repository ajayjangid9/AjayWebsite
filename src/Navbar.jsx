import React from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return(
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">

        
    <nav className="navbar navbar-expand-lg navbar-light ">
  <NavLink class="navbar-brand" to="/Home">AJay Jangid</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink activeClassName="menu_active" className="nav-link" to="/Home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/Portfolio">Portfolio</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink activeClassName="menu_active" className="nav-link" to="/Services">
          Services
        </NavLink>
       
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/Contact">Contact</NavLink>
      </li>
    </ul>
   
  </div>
</nav>
</div>
      </div>
    </div>
    </>
  );
};
export default Navbar;