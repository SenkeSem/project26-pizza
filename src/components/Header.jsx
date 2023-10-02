import { Link } from 'react-router-dom';

function Header() {
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
        <Link to="/cart">
          <div className="cart">
            <p className="price">520 ₽</p>
            <img width={1} height={25} src="img/cart-line.svg" alt="cart-line" />
            <div className="cart-block">
              <img src="img/cart.svg" alt="cart" />
              <p>3</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="header-line"></div>
    </>
  );
}

export default Header;
