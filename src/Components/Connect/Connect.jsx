import { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../../action/signin.user"



function Connect() {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await dispatch(login(email, password))

        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
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
                <form  >
                    <div className="modalconnect-form">
                        <label>Username</label>
                        <input type="text" id="username" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="modalconnect-form">
                        <label>Password</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="modalconnect-rememb">
                        <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
                    </div>
                    <div>
                    <button className="modalconnect-button" type="submit" onClick={handleSubmit}>Sign In</button>
                    </div>
                </form>
            </section>
        </div>
    )
}



export default Connect;