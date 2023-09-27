function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <img width={38} height={38} src="./img/logo.svg" alt="logo" />
          <div>
            <h2>REACT PIZZA</h2>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="cart">
          <p className="price">520 ₽</p>
          <img width={1} height={25} src="./img/cart-line.svg" alt="cart-line" />
          <div className="cart-block">
            <img src="./img/cart.svg" alt="cart" />
            <p>3</p>
          </div>
        </div>
      </div>
      <div className="header-line"></div>

      <nav className="categories">
        <ul>
          <li className="active">Все</li>
          <li>Мясные</li>
          <li>Вегетарианская</li>
          <li>Гриль</li>
          <li>Острые</li>
          <li>Закрытые</li>
        </ul>
        <div className="sort">
          <img width={10} height={6} src="./img/triangle.svg" alt="triangle" />
          <p>Сортировка по:</p>
          <span>популярности</span>
        </div>
        <div className="popup">
          <p className="active">популярности</p>
          <p>по цене</p>
          <p>по алфавиту</p>
        </div>
      </nav>

      <h1>Все пиццы</h1>

      <div className="pizza-list">
        <div className="pizza-block">
          <img width={260} height={260} src="./img/pizza.png" alt="pizza" />
          <h3>Чизбургер-пицца</h3>
          <div className="selector">
            <ul className="dough">
              <li className="active">тонкое</li>
              <li>традиционное</li>
            </ul>
            <ul className="size">
              <li className="active">26 см.</li>
              <li>30 см.</li>
              <li>40 см.</li>
            </ul>
          </div>
          <div className="button">
            <h4>от 395 ₽</h4>
            <div className="add-button">
              <img src="./img/plus.svg" alt="plus" />
              <p>Добавить</p>
              <img src="./img/number.svg" alt="number" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
