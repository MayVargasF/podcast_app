import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import "../../styles/components/EpisodesList.scss";

function EpisodesList({ episodes, loadingUpdate }) {
  const params = useParams();

  useEffect(() => {
    loadingUpdate(false);
  });

  const episode = episodes.map((episode, index) => (
    <ul key={index} className="episodesList__episodesContainer__episode">
      <li>
        <Link
          to={`/podcast/${params.podcastId}/episode/${episode.id}`}
          className="episodesList__episodesContainer__episode__link"
          onClick={() => loadingUpdate(true)}
        >
          {episode.name}
        </Link>
      </li>
      <li className="episodesList__episodesContainer__center">
        {episode.date}
      </li>
      <li className="episodesList__episodesContainer__center">
        {episode.duration}
      </li>
    </ul>
  ));

  return (
    <section className="episodesList">
      <h2 className="episodesList__title">Episodes: {episodes.length}</h2>
      <article className="episodesList__episodesContainer">
        <ul className="episodesList__episodesContainer__header">
          <li>Title</li>
          <li className="episodesList__episodesContainer__center">Date</li>
          <li className="episodesList__episodesContainer__center">Duration</li>
        </ul>

        {episode}
      </article>
    </section>
  );
}

export default EpisodesList;
