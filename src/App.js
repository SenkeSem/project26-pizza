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
        <PizzaBlock title={'Чизбургер-пицца'} price={395} imageUrl={'./img/pizza.png'} />
        <PizzaBlock title={'Сырная'} price={450} imageUrl={'./img/pizza1.png'} />
        <PizzaBlock title={'Креветки по-азиатски'} price={290} imageUrl={'./img/pizza2.png'} />
        <PizzaBlock title={'Сырный цыпленок'} price={385} imageUrl={'./img/pizza3.png'} />
      </div>
    </div>
  );
}

export default App;
