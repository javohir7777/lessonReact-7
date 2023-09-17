import "./Header.scss";
import { Link } from "react-router-dom";

import location from "../../assets/Location.png";
import user from "../../assets/Group 108.png";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Header = () => {
  const { langType, lang, setLangType } = useContext(LanguageContext);

  const handleLang = (e) => {
    setLangType(e.target.value);
    localStorage.setItem("language", e.target.value);
  };

  return (
    <header>
      <div className="container">
        <div className="navbat__top">
          <nav className="navbar__one">
            <div className="nav-brand">
              <img src={location} alt="Who is loaction-?" />
              <select value={langType} onChange={handleLang}>
                <option value="ru">Москва</option>
                <option value="uz">Toshkent</option>
              </select>
            </div>
            <Link className="nav__link">{lang.adres}</Link>
            <Link className="nav__link">
              {lang.vremya}
              <b> 00:24:19</b>
            </Link>
          </nav>
          <nav className="navbar__two">
            <Link className="nav__link">{lang.pabota}</Link>
            <div className="nav__user">
              <img src={user} alt="" />
              <Link className="nav__link">{lang.akkaunt}</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
