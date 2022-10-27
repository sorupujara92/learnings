import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import './categoriespreview.styles.css';
import { Link } from "react-router-dom";
export const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap);
    const keys = Object.keys(categoriesMap);
    const items = [];
    keys.map((key) => {
        categoriesMap[key].slice(0, 3).map(i => {items.push(i);});
    });
    console.log(items);
    return (
        <div className="category-card-container">
        {
           
            items.map((item) => {
                 const {id,name,imageUrl,price} =   item;

                return (
                    
                    <div className="category-card-element" key={id} style={{backgroundImage: `url(${imageUrl})`}} > 
                    <div className="category-text-element">
                    <div>{name}</div> 
                    <div>${price}</div> 
                    </div>
                  </div> 

                );
            })
        }
        <Outlet></Outlet>
        </div>
    );

}