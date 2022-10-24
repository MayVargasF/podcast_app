import Header from "./Header.jsx";
import Filter from './Filter.jsx';
import ResultsList from './ResultsList.jsx';

import getPopularPodcasts from "../services/popularFetch.js";

import { useEffect, useState } from "react";

import "../styles/App.scss";



function App() {

  const [popularPodcasts, setPopularPodcasts] = useState([]);
  
  useEffect(()=>{
   getPopularPodcasts().then((data) => setPopularPodcasts(data))
  },[])

  console.log(popularPodcasts);



  return (
    <div className='globalContainer'>
      <Header />
      <Filter />
      <ResultsList popularPodcasts={popularPodcasts} />
    </div>
  );
}

export default App;
