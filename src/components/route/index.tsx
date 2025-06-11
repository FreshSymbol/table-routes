import type { ReactElement } from 'react';
import style from './Route.module.css';
import type { TRoute } from '../../types';

const Route = (props: TRoute): ReactElement => {
  return (
    <li className={style.route}>
      <p className={style.text}>{props.address}</p>
      <p className={style.text}>{props.gateway}</p>
      <p className={style.text}>{props.interface}</p>
    </li>
  );
};

export default Route;
