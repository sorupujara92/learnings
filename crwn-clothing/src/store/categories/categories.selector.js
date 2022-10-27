import { createSelector } from "reselect";
const selectCategoryReducer = (state) => state.categoriesArray;

export const selectCategory = createSelector( [selectCategoryReducer],(categoriesReducer) => 
    categoriesReducer.categoriesArray
);

export const selectCategoriesMap = createSelector( [selectCategory],(categoriesArray) => 

    categoriesArray
.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})

);