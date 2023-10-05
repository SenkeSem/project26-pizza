import React from 'react';

import style from './Search.module.scss';
import { SearchContext } from '../../App';

import debounce from 'lodash.debounce';

function Search() {
  const [value, setValue] = React.useState('');

  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setValue('');
    setSearchValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={style.container}>
      <img width={20} height={20} src="img/search.png" alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="Введите пиццу..."
      />
      {value && (
        <img onClick={onClickClear} width={20} height={20} src="img/remove.png" alt="remove" />
      )}
    </div>
  );
}

export default Search;
