import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import Skeleton from './components/Skeleton';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('https://65166a9f09e3260018c9bd8a.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setPizzas(items);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Sort />

      <h1>Все пиццы</h1>

      <div className="pizza-list">
        {isLoading
          ? [...new Array(8)].map(() => <Skeleton />)
          : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default App;
