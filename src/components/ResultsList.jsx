import PreviewItem from "./PreviewItem";
import "../styles/components/ResultsList.scss";




function ResultsList({ popularPodcasts }) {
  
  const podcast = popularPodcasts.map(podcast =>  <PreviewItem podcast={podcast}/>)


  return (
    <ul className="resultList">
      {/* <PreviewItem />
      <PreviewItem />
      <PreviewItem />
      <PreviewItem />
      <PreviewItem /> */}
      {podcast}
    </ul>
  );
}

export default ResultsList;
