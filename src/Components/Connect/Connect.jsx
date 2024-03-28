import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slice/userSlice"
import { useNavigate } from 'react-router-dom';



function Connect() {
    //state

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // redux state
    const {loading, error} = useSelector((state) =>state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        let userData = {
            email,
            password
        }
        dispatch(login(userData)).then((result) => {
            if(result.payload){
                setEmail("");
                setPassword("");
                navigate('/Dashboard')
            }
        })
        
    }

    const handleEmailChange = (event) => {
        const newValue = event.target.value; 
        setEmail(newValue); 
    }
    
    const handlePasswordChange = (event) => {
        const newValue = event.target.value; 
        setPassword(newValue);
    }
    return (
        <div className="BackgroundConnect">
            <section className="modalconnect">
                <p className="modalconnect-title">Sign In</p>
                <form autoComplete='on' >
                    <div className="modalconnect-form">
                        <label htmlFor='email'>email</label>
                        <input id='email' autoComplete='on' type="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="modalconnect-form">
                        <label htmlFor='password'>Password</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="modalconnect-rememb">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <div>
                    <button className="modalconnect-button" type="submit" onClick={handleSubmit}>
                        {loading?'Loading...':'Login'}
                    </button>
                    {error&&(
                        <div role='alert'>{error}</div>
                    )}
                    </div>
                </form>
            </section>
        </div>
    )
}



export default Connect;