import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.location}>
        <img
          src="/icons/location-dot-solid.svg"
          alt="Location icon"
          className={styles.image}
        />
        <p>Utrecht, NL</p>
      </div>
      <ul className={styles.socials}>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/mkonijnendijk/">
            <img
              src="/icons/linkedin-brands.svg"
              alt="LinkedIn Icon"
              className={styles.image}
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Maaikee">
            <img
              src="/icons/square-github-brands.svg"
              alt="GitHub Icon"
              className={styles.image}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
