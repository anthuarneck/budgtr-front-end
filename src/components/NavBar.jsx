import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h2>
        <Link to="/">Budgtr</Link>
      </h2>
      <h3>
        <Link to="/transactions">Transactions</Link>
      </h3>
      <h3>
        <Link to="/transactions/new">New Entry</Link>
      </h3>
    </nav>
  );
};

export default NavBar;
