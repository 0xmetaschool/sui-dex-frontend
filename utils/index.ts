import { SUI_TYPE_ARG } from '@mysten/sui.js/utils';

export * from './big-number';
export * from './coin';
export * from './parse';
export * from './string';
export * from './toast';
export * from './tx';

export const noop: any = () => {};

export const normalizeSuiType = (x: string) => {
  if (x === SUI_TYPE_ARG) return x;
  const splitType = x.split('::');

  const packageType = splitType[0];

  if (packageType.length === 66) return x;

  if (!packageType.includes('0x')) return x;

  const postOx = packageType.split('0x')[1];

  const paddedType = '0x' + postOx.padStart(64, '0');

  return [paddedType, ...splitType.slice(1)].join('::');
};
