import './signin.styles.css';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../store/user/user.action';
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(event) {

        dispatch(setCurrentUser({"name": "soru"}));
        navigate("/shop"); 
    }

    return (

     
        <div className="signin">

            <form className='form-input' onSubmit={handleSubmit}>
            Email <input type="email" className="form-input" label="email"></input>
           Password  <input type="password" className="form-input" label="password"></input>
            <button className="button-input" type="submit"> submit </button>
            </form>
        </div>

    );

}