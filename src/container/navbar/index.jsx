import "./Navbar.scss";
import pizza from "../../assets/Group 2.png";
import korzinka from "../../assets/Shopping bag.png";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav className="nav-brands">
          <div className="nav__brand">
            <img src={pizza} alt="" />
            <span>Куда пицца</span>
          </div>
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
