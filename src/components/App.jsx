import Header from "./Header.jsx";
import Filter from './Filter.jsx';
import ResultsList from './ResultsList.jsx';
import PodcastDetails from './PodcastDetails.jsx';

import getPopularPodcasts from "../services/popularFetch.js";
import getEpisodes from "../services/podcastFetch.js";

import { useEffect, useState } from "react";
import {  Routes, Route, matchPath,useLocation } from 'react-router-dom';

import "../styles/App.scss";





function App() {

  const [popularPodcasts, setPopularPodcasts] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  
  
  //Fetch popular podcasts with details.
  useEffect(()=>{
   getPopularPodcasts().then((data) => setPopularPodcasts(data))
  },[])

  //console.log(popularPodcasts);

  const { pathname } = useLocation();
  const dataPath = matchPath ('/podcast/:podcastId', pathname);

  const podcastId = dataPath !== null ? dataPath.params.podcastId : null;
  const podcastFound = popularPodcasts.find(podcast => podcast.id === podcastId );
 
  console.log(podcastFound);

  //Fetch episodes podcast found

  //Guardar fetch en una función y vincularla a un evento onClick en el podcast.

  useEffect(()=>{
    getEpisodes(podcastId).then(data => setEpisodes(data))
  },[podcastId]);


  return (
    <div className='globalContainer'>
      <Header />

      <Routes>
        <Route path='/' 
        element={<main>
          <Filter />
          <ResultsList popularPodcasts={popularPodcasts} />
        </main>} />
        <Route path='/podcast/:podcastId' element={ <PodcastDetails podcastFound = {podcastFound}/> }/>
      </Routes>
          
      
     
    </div>
  );
}

export default App;
