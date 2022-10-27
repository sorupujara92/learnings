import { CATEGORIES_TYPES } from "./categories.types";
const INITIAL_VALUE = {
    'categoriesArray' : []
}
export const categoriesReducer = (state=INITIAL_VALUE,action) =>{

const {type,payload} = action;

switch(type){
    case  CATEGORIES_TYPES.SET_CATEGORIES :
        return {...state,categoriesArray : payload}
    default :
        return state;    
}

}