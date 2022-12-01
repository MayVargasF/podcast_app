import InfoPodcast from "../commons/infoPodcast.jsx";
import EpisodesList from "../sections/EpisodesList.jsx";

import { useEffect, useContext } from "react";

import { LoadingContext } from "../../contexts/LoadingContext.js";

import "../../styles/components/ViewDetails.scss";

const PodcastDetails = ({ podcastFound, episodes }) => {
  const cntxLoadingContext = useContext(LoadingContext);

  useEffect(() => {
    if (episodes.length > 0) {
      if (cntxLoadingContext.loading) {
        setTimeout(() => {
          cntxLoadingContext.setLoading(false);
        }, 2000);
      }
    }
  }, [cntxLoadingContext]);

  return (
    <div className="viewDetails">
      <InfoPodcast podcastFound={podcastFound} />
      <EpisodesList episodes={episodes} />
    </div>
  );
};

export default PodcastDetails;
