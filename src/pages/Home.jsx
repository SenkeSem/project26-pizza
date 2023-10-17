import React from 'react';
import axios from 'axios';
import qs from 'qs';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import { sortList } from '../components/Sort';
import Skeleton from '../components/Skeleton';
import Pagination from '../components/Pagination';

import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCategoryId, setPageCounter, setFilters } from '../redux/slices/filterSlice';
import { setPizza } from '../redux/slices/pizzaSlice';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);
  const pageCounter = useSelector((state) => state.filter.pageCounter);
  const pizzas = useSelector((state) => state.pizza.items);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setPageCounter(number));
  };

  const { searchValue } = React.useContext(SearchContext);

  const [isLoading, setIsLoading] = React.useState(true);

  const fetchPizzas = async () => {
    setIsLoading(true);

    try {
      const responce = await axios.get(
        `https://65166a9f09e3260018c9bd8a.mockapi.io/items?page=${pageCounter}&limit=4&${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.sortProperty}&search=${searchValue}`,
      );
      setIsLoading(false);
      dispatch(setPizza(responce.data));
    } catch (error) {
      setIsLoading(false);
      alert('Ошибка при запросе пицц с сервера!!!');
    }
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        pageCounter,
        categoryId,
        sortProperty: sortType.sortProperty,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sortType, pageCounter]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );

      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
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
