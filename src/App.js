import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import React from 'react';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('https://65166a9f09e3260018c9bd8a.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setPizzas(items);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Sort />

      <h1>Все пиццы</h1>

      <div className="pizza-list">
        {pizzas.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
