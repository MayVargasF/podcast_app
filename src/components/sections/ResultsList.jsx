import PreviewItem from "../commons/PreviewItem";
import "../../styles/components/ResultsList.scss";

import { Link } from "react-router-dom";
import { useContext } from "react";

import { LoadingContext } from "../../contexts/LoadingContext.js";

function ResultsList({ filteredPodcast }) {
  const cntxLoadingContext = useContext(LoadingContext);

  const podcast = filteredPodcast.map((podcast, index) => (
    <Link
      className="link"
      to={`/podcast/${podcast.id}`}
      key={index}
      id={podcast.id}
      onClick={() => cntxLoadingContext.setLoading(true)}
    >
      <PreviewItem podcast={podcast} />
    </Link>
  ));

  return <ul className="resultList">{podcast}</ul>;
}

export default ResultsList;
