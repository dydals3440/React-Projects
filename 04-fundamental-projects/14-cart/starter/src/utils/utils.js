// Total Amount 호출
export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;
  console.log(cart);
  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * price;
  }
  return { totalAmount, totalCost };
};
