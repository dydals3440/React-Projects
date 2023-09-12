// Total Amount 호출
export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;
  console.log(cart.values());
  //   for (let item of cart.values()) {
  //     console.log(item);
  //   }
  return { totalAmount, totalCost };
};
