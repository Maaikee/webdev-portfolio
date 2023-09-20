import styles from './TextCard.module.css'

interface TextCardProps {
  title: string;
  description: string;
}

export function TextCard({ title, description }: TextCardProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
