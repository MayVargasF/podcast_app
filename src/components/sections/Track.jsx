import "../../styles/components/Track.scss";
import ls from "../../services/localstorage.js";

const Track = ({ episodeFound }) => {
  const episode = episodeFound || ls.get("episodeFound");

  return (
    <section className="track">
      <h2 className="track__title">{episode.name}</h2>
      <p className="track__description">{episode.description}</p>

      <div className="track__audio__container">
        <audio controls>
          <source
            className="track__audio"
            src={episode.track}
            type="audio/mpeg"
          ></source>
        </audio>
      </div>
    </section>
  );
};

export default Track;
