import { USER_TYPES } from "./user.types";

const INITIAL_VALUE = {
    "currentUser" : {}
}


export const userReduer = (state=INITIAL_VALUE,action) => {
const {type,payload} = action;

switch (type) {

    case USER_TYPES.SET_USER :
        return {...state,currentUser : payload}
    default :
        return state
}
}