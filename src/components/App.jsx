import Header from "./Header.jsx";
import Filter from './Filter.jsx';
import ResultsList from './ResultsList.jsx';
import PodcastDetails from './PodcastDetails.jsx';

import getPopularPodcasts from "../services/popularFetch.js";
import ls from "../services/localstorage.js";
import getEpisodes from "../services/podcastFetch.js";

import { useEffect, useState } from "react";
import {  Routes, Route, matchPath,useLocation } from 'react-router-dom';

import "../styles/App.scss";





function App() {

  const [popularPodcasts, setPopularPodcasts] = useState(ls.get('popularPodcastLocal', []));
  const [episodes, setEpisodes] = useState([]);
  
  
  //Fetch popular podcasts with details.

  useEffect(()=>{
    if (popularPodcasts.length === 0) {
      getPopularPodcasts().then((data) => {
        setPopularPodcasts(data);
        ls.set('popularPodcastLocal', data);
      })
    }
  },[popularPodcasts])


  //console.log(popularPodcasts);

  const { pathname } = useLocation();
  const dataPath = matchPath ('/podcast/:podcastId', pathname);

  const podcastId = dataPath !== null ? dataPath.params.podcastId : null;
  const podcastFound = popularPodcasts.find(podcast => podcast.id === podcastId );
  
 
  //console.log(podcastFound);

  //Fetch episodes podcast found

  console.log(podcastId)
  
  const fetchEpisodes = () => {
    console.log('ejecutando fetchEpisodes')
    console(podcastId)
   
    // getEpisodes(podcastId).then(data => { 
    //   setEpisodes(data);
    // })
  }


  // useEffect(()=>{
  //   getEpisodes(podcastId).then(data => setEpisodes(data))
  // },[podcastId]);


  return (
    <div className='globalContainer'>
      <Header />

      <Routes>
        <Route path='/' 
        element={<main>
          <Filter />
          <ResultsList popularPodcasts={popularPodcasts} fetchEpisodes={fetchEpisodes} />
        </main>} />
        <Route path='/podcast/:podcastId' element={ <PodcastDetails podcastFound = {podcastFound}/> }/>
      </Routes>
          
    
    </div>
  );
}

export default App;
