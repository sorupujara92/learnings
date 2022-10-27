import './shop.styles.css';
import { Route,Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../../store/categories/categories.selector';
import { CategoriesPreview } from '../../CategoriesPreview/categoriespreview.component';
import { Category } from '../../Category/category.component';
import { Outlet } from 'react-router-dom';
export const Shop = () => {
    return (
    <Routes>  
      <Route index element={<CategoriesPreview />} />
      { <Route path=':category' element={<Category />} /> }
 </Routes>
    );


}