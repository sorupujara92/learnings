import './navigation.styles.css';
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo} from '../../../logo.svg'
import { ReactComponent as CartLogo} from '../../../cart.svg'

import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../../store/cart/cart.selector';
export const Navigation =() => {
const cartCount = useSelector(selectCartCount);
console.log(cartCount);
return (
        <div>
            <div className='navigation-container'>
                <Link className='crown-logo' to="/">
                        <CrownLogo></CrownLogo>
                </Link>

    <Link className='sign-in' to="/shop">Shop</Link>
    <Link className='cart' to="/"><CartLogo></CartLogo><span className='item-count'>{cartCount}</span></Link>
    </div>
    <Outlet></Outlet>
        </div>

);

}