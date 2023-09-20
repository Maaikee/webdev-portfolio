import styles from "./Gallery.module.css";
import { Link } from "react-router-dom";

interface GalleryProps {
  title: string;
  subtitle?: string;
  elements: Array<React.ReactNode>;
  button?: Button;
}

interface Button {
  title: string;
  url: string;
}

export function Gallery({ title, subtitle, elements, button }: GalleryProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.header}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.gallery}>{elements}</div>
        {button && (
          <Link to={button.url} className={styles.button}>
            {button.title}
          </Link>
        )}
      </div>
    </section>
  );
}
