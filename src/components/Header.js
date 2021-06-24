import React from "react";
import {Link } from "react-router-dom"
function Header() {
  return (
    <header>
      <Link className="homepage-link" to="/">
      <h1>Users</h1>
      </Link>
      
      <Link className="users-link" to="./users">
        <h1>view users</h1>
      </Link>
    </header>
  );
}

export default Header;
