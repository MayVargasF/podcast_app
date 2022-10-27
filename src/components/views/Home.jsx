import Filter from '../commons/Filter.jsx';
import ResultsList from '../sections/ResultsList.jsx';
function Home ({popularPodcasts}) {
    return (
        <main>
      <Filter/>
      <ResultsList popularPodcasts={popularPodcasts} />
      </main>
    );
  }
  export default Home;