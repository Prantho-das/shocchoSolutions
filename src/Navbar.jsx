import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink exact activeClassName="" className="navbar-brand" to="/">
            ShocchoSolutions
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="home_active"
                  className="nav-item nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="home_active"
                  className="nav-item nav-link"
                  to="/Service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="home_active"
                  className="nav-item nav-link"
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="home_active"
                  className="nav-item nav-link"
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}
export default Navbar;