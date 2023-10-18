import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addPizza } from '../redux/slices/cartSlice';

function PizzaBlock({ id, title, price, imageUrl, types, sizes }) {
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);

  const PIZZA_TYPE = ['тонкое', 'традиционное'];

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.pizzas.find((obj) => obj.id === id));

  const onClickAdd = () => {
    const pizza = {
      id,
      title,
      price,
      imageUrl,
      PIZZA_TYPE: PIZZA_TYPE[activeType],
      sizes: sizes[activeSize],
    };

    dispatch(addPizza(pizza));
    console.log('Добавили пиццу в корзину!');
  };

  return (
    <div className="pizza-block">
      <Link to={`/pizza/${id}`}>
        <img width={260} height={260} src={imageUrl} alt="pizza" />
      </Link>
      <h3>{title}</h3>
      <div className="selector">
        <ul className="dough">
          {types.map((typeId) => (
            <li
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? 'active' : ''}>
              {PIZZA_TYPE[typeId]}
            </li>
          ))}
        </ul>
        <ul className="size">
          {sizes.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? 'active' : ''}>
              {item} см.
            </li>
          ))}
        </ul>
      </div>
      <div onClick={onClickAdd} className="button">
        <h4>от {price} ₽</h4>
        <div className="add-button">
          <img src="./img/plus.svg" alt="plus" />
          <p>Добавить</p>
          {cartItem && (
            <div className="orange-circle">
              <span>{cartItem.counterAdd}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
