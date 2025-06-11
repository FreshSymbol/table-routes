import type { ReactElement } from 'react';
import style from './Loader.module.css';

const Loader = (): ReactElement => {
  return (
    <div className={style.loader}>
      <div className={style.spinner}></div>
      <p className={style.text}>Загрузка...</p>
    </div>
  );
};

export default Loader;
