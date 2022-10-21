import '../styles/components/Filter.scss';

function Filter() {
    return (
      <form className='form'>
       <p className='form__numberResults'>100</p>
        <input className='form__inputFilter' type='text' placeholder='Filter podcasts...' name='inputFilter' id='inputFilter'/>
      </form>
    );
  }
  
  export default Filter;
  