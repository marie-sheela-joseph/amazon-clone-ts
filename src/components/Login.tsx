import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { auth } from '../firebase'
import Footer from './Footer';

function Login() {
    const [localState, setLocalState] = useState({ email: '', password: '' });
    const history = useNavigate();
    function login(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        auth.signInWithEmailAndPassword(localState.email, localState.password)
            .then((auth) => {
                history('/');
            })
            .catch(e => {
                alert(e.message)
            })
    }
    function register(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(localState.email, localState.password)
            .then((auth) => {
                history('/');
            })
            .catch(e => {
                alert(e.message)
            })
    }
    return (
        <section className='login'>
            <div className='container'>
                <div>
                    <div className='login__logo'>
                        <Link to={'/'}>
                            <img src='./assets/logo.png' alt='amazon' />
                        </Link>
                    </div>
                    <div className='login__container'>
                        <h1>Sign in</h1>
                        <form onSubmit={(e) => login(e)}>
                            <div>
                                <label htmlFor='email'><strong>Email</strong></label>
                                <br></br>
                                <input type='email' id='email' required value={localState.email} onChange={(e) => setLocalState((prevState) => { return { ...prevState, email: e.target.value } })} />
                            </div>
                            <div>
                                <label htmlFor='password'><strong>Password</strong></label>
                                <br></br>
                                <input type='password' id='password' required value={localState.password} onChange={(e) => setLocalState((prevState) => { return { ...prevState, password: e.target.value } })} />
                            </div>
                            <button type="submit" className='login__signInButton'>Sign in</button>
                        </form>
                        <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                        <button type="submit" className='login_signUpButton' onClick={(e) => register(e)}>Create your Amazon Account</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login