import {Link} from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <i class="fa-solid fa-border-none"></i>
        <div className="logo-text">
        <Link to="/" className="main-logo-link">
          <i class="fa-solid fa-map"></i>
          <span className="main-logo">Trella</span>
          </Link>
        </div>
      </div>
      <nav className="main-navigation">
        <ul className="main-navlist">
          <li className="navlist-item">
            <span className="navitem-text">
              Робочі області<i class="fa-solid fa-angle-down"></i>
            </span>
          </li>
          <li className="navlist-item">
            <span className="navitem-text">
              Нещодавні<i class="fa-solid fa-angle-down"></i>
            </span>
          </li>
          <li className="navlist-item">
            <span className="navitem-text">
              Важливе<i class="fa-solid fa-angle-down"></i>
            </span>
          </li>
          <li className="navlist-item">
            <span className="navitem-text">
              Шаблони<i class="fa-solid fa-angle-down"></i>
            </span>
          </li>
          <li className="navlist-item btn-active">
            <span className="navitem-text">Створити</span>
          </li>
        </ul>
        <div className="navbar-search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input className="searchbar" type="search" placeholder="Пошук" />
          <i class="fa-solid fa-circle-info"></i>
          <i class="fa-solid fa-bell"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
