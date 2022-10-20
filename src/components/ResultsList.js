import PreviewItem from './PreviewItem';
import '../styles/components/ResultsList.scss';

function ResultsList() {
  return (
    <ul className='resultList'>
        <PreviewItem/>
        <PreviewItem/>
        <PreviewItem/>
        <PreviewItem/>
        <PreviewItem/>

    </ul>
  );
}

export default ResultsList;