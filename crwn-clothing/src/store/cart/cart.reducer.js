import { CART_TYPES } from "./cart.types";
const INITIAL_VALUE = {
    'cartItems' : [],
    'cartTotal' : 0,
    'cartCount' : 0
}
export const cartReducer = (state=INITIAL_VALUE,action) =>{

const {type,payload} = action;

switch(type){
    case  CART_TYPES.SET_CART_ITEMS :
        return {...state,cartItems : payload}
    default :
        return state;    
}

}