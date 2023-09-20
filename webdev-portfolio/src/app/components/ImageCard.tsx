import { Link } from "react-router-dom";

interface ImageCardProps {
  title: string;
  slug: string;
}

export function ImageCard({ title, slug }: ImageCardProps) {
  return (
    <Link to={`/projects/${slug}`} className="project-link">
      <div className="project-card">
        <div className="img-wrapper">
          <img
            className="project-card-img"
            src={`/images/${slug}.PNG`}
            alt={`My ${title} project.`}
          />
        </div>
        <h3 className="project-header">{title}</h3>
      </div>
    </Link>
  );
}
