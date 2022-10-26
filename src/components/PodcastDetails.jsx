import InfoPodcast from "./infoPodcast.jsx";
import getEpisodes from "../services/podcastFetch.js";


import { useEffect } from "react";

const PodcastDetails = ({ podcastFound }) => { 

  useEffect(()=>{
    getEpisodes(podcastFound.id).then(data => data)
  },[podcastFound]);

    return (<>
   <InfoPodcast podcastFound={podcastFound}/>
    </>)
};



export default PodcastDetails;