import React from 'react';

function Sort({ value, onChangeSort }) {
  const [isVisible, setIsVisible] = React.useState(false);

  const sortList = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене', sortProperty: 'price' },
    { name: 'алфавиту', sortProperty: 'title' },
  ];

  const onClickPopup = (item) => {
    onChangeSort(item);
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="sort">
        <img width={10} height={6} src="img/triangle.svg" alt="triangle" />
        <p>Сортировка по:</p>
        <span onClick={() => setIsVisible(!isVisible)}>{value.name}</span>
        {isVisible && (
          <div className="popup">
            {sortList.map((item, index) => (
              <p
                key={index}
                onClick={() => onClickPopup(item)}
                className={value.name === item.name ? 'active' : ''}>
                {item.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Sort;
