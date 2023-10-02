import React from 'react';

import Header from '../../components/Header';
import style from './NotFound.module.scss';

function NotFound() {
  return (
    <div className="wrapper">
      <Header />
      <img className={style.blackVlastelin} src="img/NotFound.jpg" alt="NotFoundImg" />
    </div>
  );
}

export default NotFound;
