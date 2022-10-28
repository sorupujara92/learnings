import { createAction } from "../../utils/reducers/reducers-util";

import { USER_TYPES } from "./user.types";
export const setCurrentUser = (user) => createAction(USER_TYPES.SET_USER,user)