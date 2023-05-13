export const convertPrice = (price: string) => {
  const priceNumber = parseInt(price);
  if (priceNumber > 0 && priceNumber < 50) {
    return "CHEAP";
  } else if (priceNumber > 50 && priceNumber < 100) {
    return "MEDIUM";
  } else {
    return "EXPENSIVE";
  }
};
