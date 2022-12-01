import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

import "../../styles/components/EpisodesList.scss";

import { LoadingContext } from "../../contexts/LoadingContext";

import { dateFormat } from "../../services/dateFormat";
import { timeConversor } from "../../services/timeConversor";

function EpisodesList({ episodes }) {
  const params = useParams();
  const cntxLoadingContext = useContext(LoadingContext);

  const episode = episodes.map((episode, index) => (
    <ul key={index} className="episodesList__episodesContainer__episode">
      <li>
        <Link
          to={`/podcast/${params.podcastId}/episode/${episode.id}`}
          className="episodesList__episodesContainer__episode__link"
          onClick={() => cntxLoadingContext.setLoading(true)}
        >
          {episode.name}
        </Link>
      </li>
      <li className="episodesList__episodesContainer__center">
        {dateFormat(episode.date)}
      </li>
      <li className="episodesList__episodesContainer__center">
        {timeConversor(episode.duration)}
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
        {!cntxLoadingContext.loading
          ? episode
          : "Cargando lista de episodios..."}
      </article>
    </section>
  );
}

export default EpisodesList;
