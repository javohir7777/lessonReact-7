import { categories } from "../../data/categories";
import fire from "../../assets/Fire.png";
import "./Section.scss";
const Section = () => {
  return (
    <div className="container">
      <ul className="nav-menu">
        <li className="nav-link">
          <img src={fire} alt="" />
          <a href="">Акции</a>
        </li>
        {categories.map((category) => (
          <li key={category} className="nav-link">
            <img src={category.image} alt="" />
            <a href="">{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section;
