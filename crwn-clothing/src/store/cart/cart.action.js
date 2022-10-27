import { createAction } from "../../utils/reducers/reducers-util";
import { CART_TYPES } from "./cart.types";

const addItemsToCartAction = (cartItems,itemToAdd) => {
    const found = cartItems.some(el => el.id === itemToAdd.id);

    if (!found){
        return [...cartItems,{...itemToAdd,quantity:1}]
    } else {
        return cartItems.map((cartItem) => cartItem.id===itemToAdd.id ? {...cartItem,quantity : cartItem.quantity+1} : cartItem )
    }
}


const removeItemsToCartAction = (cartItems,itemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartIem) => cartIem.id===itemToAdd.id
    );

    if (existingCartItem.quantity>1){
        return cartItems.map((cartItem) => cartItem.id===itemToAdd.id ? {...cartItem,quantity : cartItem.quantity-1} : cartItem )
    } else {
        return cartItems.filter((cartItem) => cartItem.id!=itemToAdd.id);
    }
}

const clearItemsToCartAction = (cartItems,itemToAdd) => {
    return cartItems.filter((cartItem) => cartItem.id!=itemToAdd.id); 
}

export const addItemToCart = (cartItems,itemToAdd) => createAction(CART_TYPES.SET_CART_ITEMS,addItemsToCartAction(cartItems,itemToAdd));


export const removeItemToCart = (cartItems,itemToAdd) => createAction(CART_TYPES.SET_CART_ITEMS,removeItemsToCartAction(cartItems,itemToAdd));

export const clearItemToCart = (cartItems,itemToAdd) => createAction(CART_TYPES.SET_CART_ITEMS,clearItemsToCartAction(cartItems,itemToAdd));