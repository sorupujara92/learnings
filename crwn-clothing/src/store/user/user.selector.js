import { createSelector } from "reselect";

export const getCurrentUser = (state) => state.user.currentUser;