import { createSelector } from "reselect";
 const selectCartItemsReducer = (state) => state.cart;

export const selectCartItems = createSelector( [selectCartItemsReducer],(cart) => 
cart.cartItems
);


export const selectCartTotal = createSelector( [selectCartItems],(cartItems) => 
cartItems.reduce((total,cartItem) => total +cartItem.quantity*cartItem.price,0)
);


export const selectCartCount = createSelector( [selectCartItems],(cartItems) => 
cartItems.reduce((total,cartItem) => total +cartItem.quantity,0)
);