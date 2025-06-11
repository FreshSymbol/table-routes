import type { TRoute } from '../types';

export const fetchDataRoutes = async (url: string): Promise<TRoute[]> => {
  const res = await fetch(url);
  if (res.ok) return res.json();
  else throw new Error('Ошибка запроса данных');
};
