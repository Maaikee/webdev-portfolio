import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";

export function Header() {
  return (
    <header className={styles.container}>
      <Link to="/">
        <img
          src="/icons/code-solid-black.svg"
          alt="site logo"
          className={styles.logo}
        />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About me</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburgerContainer}>
        <HamburgerMenu />
      </div>
    </header>
  );
}
