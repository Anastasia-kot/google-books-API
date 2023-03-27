export const arrayToShortString = (arr: string[]): string => {
  if (arr.length > 1) {
    return arr[0] + " and others";
  } 
  if (arr.length === 1) {
   return arr[0];
  } 
    return "No authors";
};
