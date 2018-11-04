import ufs from 'assets/data/ufs.json';
import locals from 'assets/data/locals.json';

export const getStates = () => ufs;

export const getRandomLocal = () =>
  locals[Math.floor(Math.random() * locals.length)];
