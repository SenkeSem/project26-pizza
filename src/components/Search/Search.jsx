import style from './Search.module.scss';

function Search() {
  return (
    <div className={style.container}>
      <img width={20} height={20} src="img/search.png" alt="search" />
      <input type="text" placeholder="Введите пиццу..." />
      <img width={20} height={20} src="img/remove.png" alt="remove" />
    </div>
  );
}

export default Search;
