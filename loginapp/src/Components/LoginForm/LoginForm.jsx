import React, { useState } from 'react';
import './LoginForm.css';
import { FaRegUserCircle, FaUnlockAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// The Above one is user icon imported

const LoginForm = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className='wrapper'>
            <h1>{action}</h1>
            {action === "Sign Up" ? <div className="input-box">
                <FaRegUserCircle className='icon' />
                <input type="text" placeholder='Username' required />
            </div> : <div></div>
            }

            <div className="input-box">
                <MdEmail className='icon' />
                <input type="email" placeholder='Email' required />
            </div>

            <div className="input-box">
                <FaUnlockAlt className='icon' />
                <input type="password" placeholder='Password' required />
            </div>

            {action === "Login" ?
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div> : <div></div>
            }

            <div className="buttons">
                <button className={action === "Sign Up" ? "submit gray" : "submit"} type='submit' onClick={() => { setAction("Sign Up") }}>Sign Up</button>
                <button className={action === "Login" ? "submit gray" : "submit"} type='submit' onClick={() => { setAction("Login") }}>Login</button>
            </div>

            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </div>
    )
}

export default LoginForm