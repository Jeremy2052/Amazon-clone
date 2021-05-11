import React, {useState} from 'react'
import './Login.css';
import logo from './logo.png'
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase"

function Login() {
    //for redirecting
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //function to take an event
    const login = e => {
        //stops the refresh
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            //logged in, redirect to homepage
            history.push("/")
        })
        //if something is wrong
        .catch((e) => alert(e.message));
    }

    const register = e => {
        //stops the refresh
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            //create a user and logged in
            history.push("/")
        })
        .catch((e) => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img src={logo} alt="" className="login__logo"/>
            </Link>
            <div className="login__container">
            <h1>Sign In</h1>
            <form action="">
                <h5>Email</h5>
                {/* when type in, grab the email variable */}
                <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} className="login__registerButton" >Create your Amazon Account</button>
            </form>
            </div>
        </div>
    )
}

export default Login
