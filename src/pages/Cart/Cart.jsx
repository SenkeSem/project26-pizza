import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import style from './Cart.module.scss';

function Cart() {
  return (
    <div className="wrapper">
      <Header />
      {/* <main className={style.container}>
        <div className={style.message}>
          <h3>Корзина пустая 😕</h3>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
            главную страницу.
          </p>
          <img width={300} height={255} src="img/people.png" alt="people" />
          <Link to="/">
            <button>Вернуться назад</button>
          </Link>
        </div>
      </main> */}

      <div className={style.cart_header}>
        <div className={style.cart}>
          <img width={29} height={29} src="img/black-cart.svg" alt="black-cart" />
          <h3>Корзина</h3>
        </div>
        <div className={style.clear}>
          <img width={20} height={20} src="img/trash.svg" alt="trash" />
          <p>Очистить корзину</p>
        </div>
      </div>
      <main className={style.pizza_item}>
        <img width={80} height={80} src="img/pizza.png" alt="pizza" />
        <div className={style.cart_title}>
          <h4>Сырный цыпленок</h4>
          <p>тонкое тесто, 26 см.</p>
        </div>
        <div className={style.minus_plus_button}>
          <img src="img/cart-minus.svg" alt="minus" />
          <h5>2</h5>
          <img src="img/cart-plus.svg" alt="plus" />
        </div>
        <h5 className={style.cart_price}>770 ₽ </h5>
        <img src="img/cart-remove.svg" alt="remove" />
      </main>
      <main className={style.pizza_item}>
        <img width={80} height={80} src="img/pizza1.png" alt="pizza" />
        <div className={style.cart_title}>
          <h4>Креветки по-азиатски</h4>
          <p>толстое тесто, 40 см.</p>
        </div>
        <div className={style.minus_plus_button}>
          <img src="img/cart-minus.svg" alt="minus" />
          <h5>1</h5>
          <img src="img/cart-plus.svg" alt="plus" />
        </div>
        <h5 className={style.cart_price}>290 ₽</h5>
        <img src="img/cart-remove.svg" alt="remove" />
      </main>
      <main className={style.pizza_item}>
        <img width={80} height={80} src="img/pizza2.png" alt="pizza" />
        <div className={style.cart_title}>
          <h4>Чизбургер-пицца</h4>
          <p>тонкое тесто, 30 см.</p>
        </div>
        <div className={style.minus_plus_button}>
          <img src="img/cart-minus.svg" alt="minus" />
          <h5>3</h5>
          <img src="img/cart-plus.svg" alt="plus" />
        </div>
        <h5 className={style.cart_price}>350 ₽</h5>
        <img src="img/cart-remove.svg" alt="remove" />
      </main>
      <div className={style.count_container}>
        <h5 className={style.pizza_counter}>
          Всего пицц: <span>3 шт.</span>
        </h5>
        <h5 className={style.pizza_counter}>
          Сумма заказа: <span className={style.orange}>900 ₽</span>
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
