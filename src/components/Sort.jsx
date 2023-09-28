function Sort() {
  return (
    <>
      <div className="sort">
        <img width={10} height={6} src="img/triangle.svg" alt="triangle" />
        <p>Сортировка по:</p>
        <span>популярности</span>
      </div>
      <div className="popup">
        <p className="active">популярности</p>
        <p>по цене</p>
        <p>по алфавиту</p>
      </div>
    </>
  );
}

export default Sort;
