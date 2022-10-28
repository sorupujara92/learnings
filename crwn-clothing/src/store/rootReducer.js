import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { persistStore,persistReducer } from "redux-persist";
import { userReduer } from './user/user.reducer';

import storage from "redux-persist/lib/storage";
export const rootReducer = combineReducers({
    categoriesArray : categoriesReducer,
    cart : cartReducer,
    user : userReduer
})

const persistConfig = {
    key : 'root',
    storage,
    blacklist : []
}

const persistedReducer = persistReducer(persistConfig,rootReducer);