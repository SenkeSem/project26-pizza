import { Link } from 'react-router-dom';
import Search from './Search/Search';

import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const { pizzas, totalPrice } = useSelector((state) => state.cart);

  const totalCount = pizzas.reduce((sum, item) => sum + item.counterAdd, 0);

  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img width={38} height={38} src="img/logo.svg" alt="logo" />
            <div>
              <h2>REACT PIZZA</h2>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <Link to="/cart">
          <div className="cart">
            <p className="price">{totalPrice} ₽</p>
            <img width={1} height={25} src="img/cart-line.svg" alt="cart-line" />
            <div className="cart-block">
              <img src="img/cart.svg" alt="cart" />
              <p>{totalCount}</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="header-line"></div>
    </>
  );
}

export default Header;
