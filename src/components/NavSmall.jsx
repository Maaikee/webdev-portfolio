import { useState } from "react";
import { Link } from "react-router-dom";

export function NavSmall() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen((prevState) => !prevState);
  }

  return (
    <>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={handleMenuToggle}
      >
        <span
          className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
        ></span>
      </button>
      <nav className={`nav-small ${menuOpen ? "nav-open" : ""}`} id="nav">
        <ul className="nav-list">
          <li className="nav-item" onClick={handleMenuToggle}>
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item" onClick={handleMenuToggle}>
            <Link to="/about">About me</Link>
          </li>
          <li className="nav-item" onClick={handleMenuToggle}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
