import "./PageNotFound.css";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>Oops!</h1>
      <p>This page was not found.</p>
      <Link to="/" className="btn">
        Return home
      </Link>
    </div>
  );
}
