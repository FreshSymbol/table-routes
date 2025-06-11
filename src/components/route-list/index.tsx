import type { ReactElement } from 'react';
import Route from '../route';
import type { TRoute } from '../../types';

type RouteListProps = {
  list: TRoute[];
};

const RouteList = ({ list }: RouteListProps): ReactElement => {
  return (
    <ul>
      {list.map((route) => {
        return <Route key={route.uuid} {...route} />;
      })}
    </ul>
  );
};

export default RouteList;
