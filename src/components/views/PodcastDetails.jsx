import InfoPodcast from "../commons/infoPodcast.jsx";
import EpisodesList from "../sections/EpisodesList.jsx";


import getEpisodes from "../../services/podcastFetch.js";

import { useParams } from "react-router";

import { useEffect, useState } from "react";

const PodcastDetails = ({ podcastFound }) => { 

  const [episodes, setEpisodes] = useState([]);

  const params = useParams();

  useEffect(()=>{
    getEpisodes(params.podcastId).then(data => setEpisodes(data))
  },[params.podcastId]);


    return (<>
   <InfoPodcast podcastFound={podcastFound}/>
   <EpisodesList/>
    </>)
};



export default PodcastDetails;