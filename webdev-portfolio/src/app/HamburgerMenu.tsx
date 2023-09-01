import styles from "./HamburgerMenu.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button aria-label="open navigation" onClick={() => setIsOpen(true)}>
        <img src="/icons/hamburger.svg" alt="hamburger menu" />
      </button>
      <nav className={`${styles.nav} ${!isOpen && styles.hidden}`}>
        <button aria-label="close navigation" onClick={closeMenu}>
          <img src="/icons/close.svg" alt="close menu" />
        </button>
        <ul>
          <li onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="about">About me</Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to="projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
