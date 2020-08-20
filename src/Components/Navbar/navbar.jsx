import React from "react";
import "./navbar.scss";

import logo from "../../logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="$">
              <img src={logo} alt="TourSet" />
            </a>
          </li>
          <li>
            <a href="$">About</a>
          </li>
          <li>
            <a href="$">Add a city</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
