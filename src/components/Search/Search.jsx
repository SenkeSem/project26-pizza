import React from 'react';

import style from './Search.module.scss';
import { SearchContext } from '../../App';

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={style.container}>
      <img width={20} height={20} src="img/search.png" alt="search" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        placeholder="Введите пиццу..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          width={20}
          height={20}
          src="img/remove.png"
          alt="remove"
        />
      )}
    </div>
  );
}

export default Search;
