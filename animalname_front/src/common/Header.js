import { Link } from "react-router-dom";
import "./default.css";

const Header = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-content">
          <Link to="/" className="main-logo">
            <h1>🐶 멍냥이름</h1>
          </Link>
        </div>
        <div className="header-menu">
          <ul>
            <li onClick={scrollUp}>
              <Link to="/name-stat">
                <span className="material-icons">assessment</span>
                <p>랭킹</p>
              </Link>
            </li>
            <li>
              <Link to="/name-compatibility">
                <span className="material-icons">join_inner</span>
                <p>이름궁합</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
