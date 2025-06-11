import type { TRoute } from '../types';

const parseIp = (ip: string): number => {
  return +ip.replace(/[./0]/g, '');
};

export const sortRoutesByIp = (
  arr: TRoute[],
  by: 'address' | 'gateway'
): TRoute[] => {
  return arr.sort((a, b) => parseIp(a[by]) - parseIp(b[by]));
};

export const sortRoutesByInterface = (arr: TRoute[]): TRoute[] => {
  return arr.sort((a, b) => {
    if (a.interface < b.interface) return -1;
    if (a.interface > b.interface) return 1;
    else return 0;
  });
};
