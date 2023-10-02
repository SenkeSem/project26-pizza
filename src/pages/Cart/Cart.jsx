import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import style from './Cart.module.scss';

function Cart() {
  return (
    <div className="wrapper">
      <Header />
      <main className={style.container}>
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
      </main>
    </div>
  );
}

export default Cart;
