import Header from './commons/Header.jsx';
import Home from './views/Home.jsx';
import PodcastDetails from './views/PodcastDetails.jsx';

import getPopularPodcasts from '../services/popularFetch.js';
import ls from '../services/localstorage.js';

import { useEffect, useState } from 'react';
import {  Routes, Route, matchPath,useLocation } from 'react-router-dom';

import '../styles/App.scss';





function App() {

  const [popularPodcasts, setPopularPodcasts] = useState(ls.get('popularPodcastLocal', []));
  
  
  //Fetch popular podcasts with details.

  useEffect(()=>{
    if (popularPodcasts.length === 0) {
      getPopularPodcasts().then((data) => {
        setPopularPodcasts(data);
        ls.set('popularPodcastLocal', data);
      })
    }
  },[popularPodcasts])



  const { pathname } = useLocation();
  const dataPath = matchPath ('/podcast/:podcastId', pathname);

  const podcastId = dataPath !== null ? dataPath.params.podcastId : null;
  const podcastFound = popularPodcasts.find(podcast => podcast.id === podcastId );
  


  return (
    <div className='globalContainer'>
      <Header />

      <Routes>
        <Route path='/' 
        element={<Home popularPodcasts = {popularPodcasts}/>}/>

        <Route path='/podcast/:podcastId' 
        element={ <PodcastDetails podcastFound = {podcastFound}/> }/>

      </Routes>
          
    
    </div>
  );
}

export default App;
