import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategories = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            onClick={() => onClickCategories(index)}
            className={index === activeIndex ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
