import React from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/Skeleton';

function Home({ searchValue, setSearchValue }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [pizzas, setPizzas] = React.useState([]);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://65166a9f09e3260018c9bd8a.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setPizzas(items);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue]);

  //Фейковый массив скелетонов, для отображения при загрузке страницы.
  const fakePizza = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="wrapper">
      <div className="categories-container">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>

      <h1>Все пиццы</h1>

      <div className="pizza-list">
        {isLoading
          ? fakePizza
          : pizzas
              .filter((obj) => {
                if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
