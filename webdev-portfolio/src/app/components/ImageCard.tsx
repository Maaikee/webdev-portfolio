import styles from "./ImageCard.module.css";
import { Link } from "react-router-dom";

interface ImageCardProps {
  title: string;
  slug: string;
}

export function ImageCard({ title, slug }: ImageCardProps) {
  return (
    <Link to={`/projects/${slug}`} className={styles.link}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={`/images/${slug}.PNG`}
          alt={`My ${title} project.`}
        />
      </div>
      <h3 className={styles.header}>{title}</h3>
    </Link>
  );
}
