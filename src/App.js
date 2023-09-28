import pizzas from '../src/assets/pizzas.json';
import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Sort />
      <h1>Все пиццы</h1>
      <div className="pizza-list">
        {pizzas.map((obj) => (
          <PizzaBlock {...obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
