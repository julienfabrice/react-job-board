import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";


function Navbar() {

    const [dark, setDark] = useState(false);

useEffect(() => {
  document.body.className = dark ? "dark" : "";
}, [dark]);


  return (

    <nav className="navbar">
      <Link to="/" className="logo">
        JobBoard
      </Link>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs">
            Jobs
          </NavLink>
        </li>
      </ul>
      
      <button onClick={() => setDark(!dark)}>
  {dark ? "☀️" : "🌙"}
</button>
    </nav>
  );
}

export default Navbar;