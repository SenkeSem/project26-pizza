import React from 'react';

import Header from '../../components/Header';
import style from './NotFound.module.scss';

function NotFound() {
  return (
    <div className="wrapper">
      <Header />
      <div className={style.container}>
        <img src="img/NotFound.jpg" alt="NotFoundImg" />
      </div>
    </div>
  );
}

export default NotFound;
