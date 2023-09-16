import "./Cards.scss";
import filter from "../../assets/Group 93.png";
import { products } from "../../data/products";
// import { products } from "../../data/products";

const Sushi = () => {
  return (
    <div className="container">
      <div className="card__filter-top">
        <div className="card-pizza">
          <h1>Суши</h1>
          <button>
            <img src={filter} alt="" />
            Фильтры
          </button>
        </div>
        <div className="row g-3">
          {products
            .filter((product) => product.category === "Суши")
            .map((el) => (
              <div key={el.id} className="col col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={el.image} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{el.name}</h5>
                    <h6 className="card-title-h6">{el.description}</h6>
                    <div className="card-flex">
                      <button>Выбрать</button>
                      <span>от {el.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sushi;
