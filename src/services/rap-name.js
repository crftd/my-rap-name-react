export const RAP_NAMES = [
  'SQWOZ BAB',
  'Lil pump',
  'XXXTENTACTION',
  'FACE',
  'Pasha Technique',
  'Big Baby Tape',
];

export const getRapName = () =>
  RAP_NAMES[functions.getRandomInt(RAP_NAMES.length)];
export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const functions = { getRandomInt };

export default getRapName;
