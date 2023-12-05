import React from 'react';
import CartItem from '../../components/CartItem';
import CartEmpty from './CartEmpty';

import style from './Cart.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { clearCart } from '../../redux/slices/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.cart.pizzas);
  const { totalPrice } = useSelector((state) => state.cart);

  const totalCount = pizzas.reduce((sum, item) => sum + item.counterAdd, 0);

  const onClickClear = () => {
    window.confirm('Вы точно хотите очистить корзину?');
    dispatch(clearCart());
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="wrapper">
      <div className={style.cart_header}>
        <div className={style.cart}>
          <img width={29} height={29} src="img/black-cart.svg" alt="black-cart" />
          <h3>Корзина</h3>
        </div>
        <div onClick={onClickClear} className={style.clear}>
          <img width={20} height={20} src="img/trash.svg" alt="trash" />
          <p>Очистить корзину</p>
        </div>
      </div>

      {pizzas.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <div className={style.count_container}>
        <h5 className={style.pizza_counter}>
          Всего пицц: <span>{totalCount} шт.</span>
        </h5>
        <h5 className={style.pizza_counter}>
          Сумма заказа: <span className={style.orange}>{totalPrice} ₽</span>
        </h5>
      </div>
      <div className={style.button_container}>
        <button className={style.back_button}>Вернуться назад</button>
        <button className={style.pay_button}>Оплатить сейчас</button>
      </div>
    </div>
  );
}

export default Cart;
