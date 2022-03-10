export const numberToUSD = (int) => {
  return `$${int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};
