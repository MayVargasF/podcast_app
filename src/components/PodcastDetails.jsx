import InfoPodcast from "./infoPodcast.jsx";
// import getEpisodes from "../services/podcastFetch.js";
// import { useEffect } from "react";

const PodcastDetails = ({ podcastFound }) => { 


    return (<>
   <InfoPodcast podcastFound={podcastFound}/>
    </>)
};



export default PodcastDetails;