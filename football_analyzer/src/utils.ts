export const dateStringToDate = (s: string): Date => {
  const strArr = s.split('/').map((v) => parseInt(v));
  return new Date(strArr[2], strArr[1], strArr[0]);
};
