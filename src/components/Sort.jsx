import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';

export const sortList = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'цене', sortProperty: 'price' },
  { name: 'алфавиту', sortProperty: 'title' },
];

function Sort() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.sort);

  const [isVisible, setIsVisible] = React.useState(false);
  const sortRef = React.useRef();

  const onClickPopup = (item) => {
    setIsVisible(!isVisible);
    dispatch(setSort(item));
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setIsVisible(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={sortRef} className="sort">
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
