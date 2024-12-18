import './signIn.css';
import { Link } from "react-router-dom";
import { signin } from '../../api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()

    
    const login = async (e) => {
        e.preventDefault()
        try {
            let res = await signin(username, password)            
            res = await res.json()
            console.log(res)
            localStorage.setItem('token', await res.body.token)
            navigate('/user')
        } catch(e){
            console.log(e)
        }        
    }

return (
    <>

    <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
                <form onSubmit={login}>
                <div className="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label for="remember-me"
                    >Remember me</label>
                </div>
                
                <button className="sign-in-button">Sign In</button> 
                </form>
      </section>

    </>
)

};
export default SignIn;