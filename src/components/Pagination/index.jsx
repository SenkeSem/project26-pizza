import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss';

function Pagination({ onChangePage }) {
  return (
    <>
      <ReactPaginate
        className={style.container}
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
