import React from 'react';
import style from '../pages/Cart/Cart.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { addPizza, minusPizza, removePizza } from '../redux/slices/cartSlice';

function CartItem({ id, title, price, imageUrl, PIZZA_TYPE, sizes }) {
  const { counterAdd } = useSelector((state) => state.cart.pizzas.find((obj) => obj.id === id));

  const dispatch = useDispatch();

  const onClickMinus = () => {
    dispatch(minusPizza({ id, price }));
  };

  const onClickPlus = () => {
    dispatch(addPizza({ id, price }));
  };

  const onClickRemove = () => {
    dispatch(removePizza(id));
  };

  return (
    <main className={style.pizza_item}>
      <img width={80} height={80} src={imageUrl} alt="pizza" />
      <div className={style.cart_title}>
        <h4>{title}</h4>
        <p>
          {PIZZA_TYPE}, {sizes} см.
        </p>
      </div>
      <div className={style.minus_plus_button}>
        <img onClick={onClickMinus} src="img/cart-minus.svg" alt="minus" />
        <h5>{counterAdd}</h5>
        <img onClick={onClickPlus} src="img/cart-plus.svg" alt="plus" />
      </div>
      <h5 className={style.cart_price}>{counterAdd * price} ₽ </h5>
      <img onClick={onClickRemove} src="img/cart-remove.svg" alt="remove" />
    </main>
  );
}

export default CartItem;
