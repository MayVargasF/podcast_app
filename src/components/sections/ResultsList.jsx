import PreviewItem from "../commons/PreviewItem";
import "../../styles/components/ResultsList.scss";

import { Link } from "react-router-dom";

function ResultsList({ filteredPodcast, loadingUpdate }) {
  const podcast = filteredPodcast.map((podcast, index) => (
    <Link
      className="link"
      to={`/podcast/${podcast.id}`}
      key={index}
      id={podcast.id}
      onClick={() => loadingUpdate(true)}
    >
      <PreviewItem podcast={podcast} />
    </Link>
  ));

  return <ul className="resultList">{podcast}</ul>;
}

export default ResultsList;
