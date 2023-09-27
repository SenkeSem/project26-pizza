import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <h1>Все пиццы</h1>
      <div className="pizza-list">
        <PizzaBlock />
      </div>
    </div>
  );
}

export default App;
