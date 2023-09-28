import React from 'react';

function PizzaBlock({ title, price, imageUrl }) {
  const [counterPizza, setCounterPizza] = React.useState(0);

  const addPizza = () => {
    setCounterPizza(counterPizza + 1);
  };

  return (
    <div className="pizza-block">
      <img width={260} height={260} src={imageUrl} alt="pizza" />
      <h3>{title}</h3>
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
        <h4>от {price} ₽</h4>
        <div onClick={addPizza} className="add-button">
          <img src="./img/plus.svg" alt="plus" />
          <p>Добавить</p>
          <div className="orange-circle">
            <span>{counterPizza}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
