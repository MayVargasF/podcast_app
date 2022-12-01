import InfoPodcast from "../commons/infoPodcast.jsx";
import Track from "../sections/Track.jsx";

import { LoadingContext } from "../../contexts/LoadingContext.js";

import { useContext, useEffect } from "react";

import ls from "../../services/localstorage.js";

import "../../styles/components/ViewDetails.scss";

const EpisodeDetails = ({ episodeFound }) => {
  const podcastFound = ls.get("podcastFound");

  const cntxLoadingContext = useContext(LoadingContext);

  useEffect(() => {
    if (cntxLoadingContext.loading) {
      cntxLoadingContext.setLoading(false);
    }
  }, [cntxLoadingContext]);

  return (
    !cntxLoadingContext.loading && (
      <div className="viewDetails">
        <InfoPodcast podcastFound={podcastFound} />
        <Track episodeFound={episodeFound} />
      </div>
    )
  );
};

export default EpisodeDetails;
