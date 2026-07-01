import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">

        <div className="logo">
          <span className="planet">🪐</span>
          <div>
            <h2>Mars IT</h2>
            <p>Frontend 2025</p>
          </div>
        </div>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Mission</NavLink>
          <NavLink to="/contact">Crew</NavLink>
          <NavLink to="/modal">Projects</NavLink>
        </div>

        <button className="start-btn">
          Contact us →
        </button>

      </nav>
    </header>
  );
};

export default Header;