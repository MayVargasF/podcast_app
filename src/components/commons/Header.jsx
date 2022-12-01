import { Link } from "react-router-dom";
import "../../styles/components/Header.scss";
import { LoadingContext } from "../../contexts/LoadingContext";
import { useContext } from "react";

function Header() {
  const cntxLoadingContext = useContext(LoadingContext);
  console.log(cntxLoadingContext.loading);
  return (
    <header className="header">
      <Link to="/" className="link">
        <h1 className="header__title">Podcaster</h1>
      </Link>
      {cntxLoadingContext.loading && <span className="loader"></span>}
    </header>
  );
}

export default Header;
