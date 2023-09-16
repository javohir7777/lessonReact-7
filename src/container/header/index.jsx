import "./Header.scss";
import { Link } from "react-router-dom";

import location from "../../assets/Location.png";
import user from "../../assets/Group 108.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbat__top">
          <nav className="navbar__one">
            <div className="nav-brand">
              <img src={location} alt="Who is loaction-?" />
              <select>
                <option value="1">Москва</option>
                <option value="2">Toshkent</option>
              </select>
            </div>
            <Link className="nav__link">Проверить адрес</Link>
            <Link className="nav__link">
              Среднее время доставки*:<b>00:24:19</b>
            </Link>
          </nav>
          <nav className="navbar__two">
            <Link className="nav__link">Время работы: с 11:00 до 23:00</Link>
            <div className="nav__user">
              <img src={user} alt="" />
              <Link className="nav__link">Войти в аккаунт</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
