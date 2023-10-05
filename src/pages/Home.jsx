import React from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/Skeleton';
import Pagination from '../components/Pagination';

import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setPageCounter } from '../redux/slices/filterSlice';

function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);
  const pageCounter = useSelector((state) => state.filter.pageCounter);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setPageCounter(number));
  };

  const { searchValue } = React.useContext(SearchContext);

  const [isLoading, setIsLoading] = React.useState(true);
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://65166a9f09e3260018c9bd8a.mockapi.io/items?page=${pageCounter}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&search=${searchValue}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setPizzas(items);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, pageCounter]);

  //Фейковый массив скелетонов, для отображения при загрузке страницы.
  const fakePizza = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="wrapper">
      <div className="categories-container">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
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
      <Pagination value={pageCounter} onChangePage={(number) => onChangePage(number)} />
    </div>
  );
}

export default Home;
