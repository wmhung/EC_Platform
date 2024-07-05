export const updateCart = (state) => {
  // Calculate items price
  state.itemsPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Calculate shipping price ( If order is over NT1500 then free, else NT150 shipping)
  state.shippingPrice = state.itemsPrice > 100 ? 0 : 10;

  // Calculate tax price (5% tax)
  state.taxPrice = Number(0.05 * state.itemsPrice);
  
  // Calculate total price
  state.totalPrice = 
    Math.round(Number(state.itemsPrice) + 
    Number(state.shippingPrice) +
    Number(state.taxPrice));
  
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
}