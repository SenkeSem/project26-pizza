import React from 'react';

function PizzaBlock({ title, price, imageUrl, types, sizes }) {
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);
  const [counterPizza, setCounterPizza] = React.useState(0);

  const PIZZA_TYPE = ['тонкое', 'традиционное'];

  const addPizza = () => {
    setCounterPizza(counterPizza + 1);
  };

  return (
    <div className="pizza-block">
      <img width={260} height={260} src={imageUrl} alt="pizza" />
      <h3>{title}</h3>
      <div className="selector">
        <ul className="dough">
          {types.map((typeId) => (
            <li
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? 'active' : ''}>
              {PIZZA_TYPE[typeId]}
            </li>
          ))}
        </ul>
        <ul className="size">
          {sizes.map((item, index) => (
            <li
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? 'active' : ''}>
              {item} см.
            </li>
          ))}
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
