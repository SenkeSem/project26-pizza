import React from 'react';

function Sort() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [activeSort, setActiveSort] = React.useState(0);

  const sortList = ['популярности', 'цене', 'алфавиту'];

  const onVisiblePopup = () => {
    setIsVisible(!isVisible);
  };

  const onClickPopup = (index) => {
    setActiveSort(index);
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="sort">
        <img width={10} height={6} src="img/triangle.svg" alt="triangle" />
        <p>Сортировка по:</p>
        <span onClick={onVisiblePopup}>{sortList[activeSort]}</span>
        {isVisible && (
          <div className="popup">
            {sortList.map((item, index) => (
              <p
                onClick={() => onClickPopup(index)}
                className={index === activeSort ? 'active' : ''}>
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Sort;
