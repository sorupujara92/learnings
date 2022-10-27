import './navigation.styles.css';
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo} from '../../../logo.svg'
import { Outlet } from 'react-router-dom';
export const Navigation =() => {

return (
        <div>
            <div className='navigation-container'>
                <Link className='crown-logo' to="/">
                        <CrownLogo></CrownLogo>
                </Link>

    <Link className='sign-in' to="/shop">Shop</Link>
    <Link className='cart' to="/">Cart</Link>
    </div>
    <Outlet></Outlet>
        </div>

);

}