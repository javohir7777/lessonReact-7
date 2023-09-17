import "./Navbar.scss";
import pizza from "../../assets/Group 2.png";
import korzinka from "../../assets/Shopping bag.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { categories } from "../../data/categories";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handeNav = () => {
    if (window.screenY >= 120) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handeNav);
  console.log(nav);
  return (
    <header className="sticky-top">
      <div className="container">
        <nav className="nav-brands">
          <div className="nav__brand">
            <img src={pizza} alt="" />
            <span>Куда пицца</span>
          </div>
          <ul>
            {categories.map((category) => (
              <NavLink
                key={category.id}
                className={nav ? "active" : "nav-link"}
                onChange={handeNav}
              >
                {category.name}
              </NavLink>
            ))}
            {/* <NavLink className="nav-link">Акции</NavLink>
            <NavLink className="nav-link">Суши</NavLink>
            <NavLink className="nav-link">Напитки</NavLink>
            <NavLink className="nav-link">Закуски</NavLink>
            <NavLink className="nav-link">Комбо</NavLink>
            <NavLink className="nav-link">Десерты</NavLink>
            <NavLink className="nav-link">Соусы</NavLink> */}
          </ul>
          <button>
            <img src={korzinka} alt="" />
            <span>0₽</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
