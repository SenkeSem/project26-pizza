import React from 'react';

import style from './NotFound.module.scss';

function NotFound() {
  return (
    <div className="wrapper">
      <div className={style.container}>
        <img src="img/NotFound.jpg" alt="NotFoundImg" />
      </div>
    </div>
  );
}

export default NotFound;
