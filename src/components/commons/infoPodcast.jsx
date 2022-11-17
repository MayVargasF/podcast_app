import "../../styles/components/InfoPodcast.scss";

import { Link } from "react-router-dom";

const InfoPodcast = ({ podcastFound }) => {
  return (
    <section className="infoPodcast">
      <div className="infoPodcast__container">
        <Link to={`/podcast/${podcastFound.id}`} className="link">
          <img
            className="infoPodcast__container--image"
            src={podcastFound.image}
            alt={`${podcastFound.title} cover`}
            title={`${podcastFound.title} cover`}
          ></img>
        </Link>
      </div>
      <Link to={`/podcast/${podcastFound.id}`} className="link">
        <h2 className="infoPodcast__title">{podcastFound.title}</h2>
      </Link>
      <p className="infoPodcast__author">{`by ${podcastFound.author}`}</p>

      <h3 className="infoPodcast__description">Description:</h3>
      <p className="infoPodcast__summary">{podcastFound.summary}</p>
    </section>
  );
};

export default InfoPodcast;
