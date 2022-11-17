import "../../styles/components/Filter.scss";

function Filter({ filterUpdater, filter, filteredPodcastLength }) {
  const handleInput = (ev) => {
    ev.preventDefault();
    filterUpdater(ev.target.value);
  };

  return (
    <form className="form">
      <p className="form__numberResults">{filteredPodcastLength}</p>
      <input
        className="form__inputFilter"
        type="text"
        placeholder="Filter podcasts..."
        name="inputFilter"
        id="inputFilter"
        onChange={handleInput}
        value={filter}
      />
    </form>
  );
}

export default Filter;
