import { about } from "../siteData";
import { Link } from "react-router-dom";

function AboutOverview() {
  return (
    <section className="about-overview">
      <div className="container about-overview-container">
        <h2 className="about-overview-header">About me</h2>
        <p className="subtitle about-overview-subtitle">
          Front-end developer based in Utrecht
        </p>
        <img
          src="./images/about-me.jpg"
          className="about-overview-img"
          alt=""
        />
        <p className="text-p">{about.summary}</p>
        <Link to="/about" className="btn" id="more-about-btn">
          read more about me
        </Link>
      </div>
    </section>
  );
}

export default AboutOverview;
