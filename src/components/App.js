import Header from "./Header.js";
import Filter from './Filter.js';

import "../styles/App.scss";
import ResultsList from './ResultsList.js';


function App() {
  return (
    <div className='globalContainer'>
      <Header />
      <Filter />
      <ResultsList/>
    </div>
  );
}

export default App;
