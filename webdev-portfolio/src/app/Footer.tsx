import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <img
          src="./images/location-dot-solid.svg"
          alt="Location icon"
          className={styles.image}
        />
        <p>Utrecht, NL</p>
      </div>
      <ul className={styles.socials}>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/mkonijnendijk/">
            <img
              src="./images/linkedin-brands.svg"
              alt="LinkedIn Icon"
              className={styles.image}
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Maaikee">
            <img
              src="./images/square-github-brands.svg"
              alt="GitHub Icon"
              className={styles.image}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
