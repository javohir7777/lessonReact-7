import Cards from "../container/cards";
import Kombo from "../container/cards/Kombo";
import Sous from "../container/cards/Sous";
import Sushi from "../container/cards/Sushi";
import Zakuskijsxjsx from "../container/cards/Zakuski";
import Desrt from "../container/cards/desert";
import Naptki from "../container/cards/naptki";
import Header from "../container/header";
import Navbar from "../container/navbar";
import PizzaCard from "../container/pizza";
import Section from "../container/section";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="home-page">
        <Section />
        <PizzaCard />
        <Cards />
        <Sushi />
        <Zakuskijsxjsx />
        <Desrt />
        <Naptki />
        <Sous />
        <Kombo />
      </main>
    </div>
  );
};

export default HomePage;
