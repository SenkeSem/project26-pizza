function PizzaBlock() {
  return (
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
  );
}

export default PizzaBlock;