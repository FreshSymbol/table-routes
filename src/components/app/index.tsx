import { useCallback, useEffect, useState } from 'react';
import style from './App.module.css';
import type { TRoute } from '../../types';
import Loader from '../loader';
import { fetchDataRoutes } from '../../api';
import RouteList from '../route-list';
import Sort from '../sort';

function App() {
  const [routes, setRoutes] = useState<TRoute[]>([]);

  const changeSort = useCallback((arr: TRoute[]): void => {
    setRoutes([...arr]);
  }, []);

  useEffect(() => {
    fetchDataRoutes('https://66212e473bf790e070b21e9e.mockapi.io/routes')
      .then((routes) => setRoutes(routes))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={style.app}>
      <h1 className={style.title}>Действующие маршруты IPv4</h1>
      <Sort list={routes} onClick={changeSort} />
      {!routes.length ? <Loader /> : <RouteList list={routes} />}
    </div>
  );
}

export default App;
