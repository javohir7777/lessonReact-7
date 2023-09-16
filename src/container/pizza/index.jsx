import "./Pizza.scss";
import pizzaGroup from "../../assets/Group 737.png";

const PizzaCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-sm-6 col-md-4 col-lg-3">
          <img src={pizzaGroup} alt="" />
          <p>3 средние пиццы от 999 рублей</p>
        </div>
        <div className="col col-sm-6 col-md-4 col-lg-3">
          <img src={pizzaGroup} alt="" />
          <p>3 средние пиццы от 999 рублей</p>
        </div>
        <div className="col col-sm-6 col-md-4 col-lg-3">
          <img src={pizzaGroup} alt="" />
          <p>3 средние пиццы от 999 рублей</p>
        </div>
        <div className="col col-sm-6 col-md-4 col-lg-3">
          <img src={pizzaGroup} alt="" />
          <p>3 средние пиццы от 999 рублей</p>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
