import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { useParams } from "react-router-dom";
import './category.styles.css';
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
export const Category = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const keys = Object.keys(categoriesMap);
    const items = categoriesMap[category];
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems);
    const addItemsToCart = (item) => {
        console.log("--"+cartItems);
        console.log("--"+item);
        dispatch(addItemToCart(cartItems,item));
        console.log(cartItems);
    }
    console.log(cartItems);
    return (
        <div className="categorycard-card-container">
        {
           
            items.map((item) => {
                 const {id,name,imageUrl,price} =   item;

                return (
                    
                    <div className="categorycard-card-element" key={id} style={{backgroundImage: `url(${imageUrl})`}} > 
                    <div className="categorycard-text-element">
                    <div>{name}</div> 
                    <div>${price}</div> 
                    <button className="categorycard-button" onClick={() => addItemsToCart(item)}>Add to cart</button>
                    </div>
                  </div> 

                );
            })
        }
        </div>
    );

}