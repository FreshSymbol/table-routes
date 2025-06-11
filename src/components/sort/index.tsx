import type { ReactElement } from 'react';
import style from './Sort.module.css';
import type { TRoute } from '../../types';
import { sortRoutesByInterface, sortRoutesByIp } from '../../utils';

type SortProps = {
  list: TRoute[];
  onClick: (list: TRoute[]) => void;
};

const Sort = ({ list, onClick }: SortProps): ReactElement => {
  return (
    <ul className={style.sort}>
      <li
        onClick={() => onClick(sortRoutesByIp(list, 'address'))}
        className={style.text}
      >
        Адрес назначения
      </li>
      <li
        onClick={() => onClick(sortRoutesByIp(list, 'gateway'))}
        className={style.text}
      >
        Шлюз
      </li>
      <li
        onClick={() => onClick(sortRoutesByInterface(list))}
        className={style.text}
      >
        Интерфейс
      </li>
    </ul>
  );
};
export default Sort;
