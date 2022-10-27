import './home.styles.css';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../../store/categories/categories.selector';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Home =() => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const keys = Object.keys(categoriesMap);
return (
<div className="card-container">
  {         
  keys.map((key) => {
    const {id,name,imagrUrl} = categoriesMap[key][0];
    return (
      <Link to={"shop/"+key}>
      <div className="card-element" key={id}> <img className='img' alt={name} src={categoriesMap[key][4]['imageUrl'] }/>             
      <h2>{key}</h2>
      </div> 
      </Link>
    )
  })   
 }  
 <Outlet></Outlet>
    </div>

)

};