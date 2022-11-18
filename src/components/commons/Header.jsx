import "../../styles/components/Header.scss";

function Header({ loading }) {
  return (
    <header className="header">
      <h1 className="header__title">Podcaster</h1>
      {loading && <span className="loader"></span>}
    </header>
  );
}

export default Header;
