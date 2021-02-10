import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <div>
              <Link to="/">
                <img src={logo} alt="Beach Resort" />
              </Link>
            </div>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <div style={{ fontFamily: "Lato" }}>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tours">Tours</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
