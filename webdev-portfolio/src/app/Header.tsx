import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/">
          <img
            src="/icons/code-solid-black.svg"
            alt="site logo"
            className={styles.logo}
          />
        </Link>
      </div>
    </header>
  );
}
