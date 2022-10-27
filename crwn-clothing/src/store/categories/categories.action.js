import { createAction } from "../../utils/reducers/reducers-util";
import { CATEGORIES_TYPES } from "./categories.types";
export const setCategoriesArray = (categoriesArray) => createAction(CATEGORIES_TYPES.SET_CATEGORIES,categoriesArray);