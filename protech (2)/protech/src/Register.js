import React from 'react'
import './App.css'

export const Register = () => {
    return (
        <>
        <div className="Register">
            <h1>Sign up as a Customer</h1>

            <form action="" className="login flex-box-8">
            <span><b>Username </b><input type="name" name="username" placeholder="username"/></span>
                <span><b>Email id - </b><input type="email" name="email" placeholder="email"/></span>
                <br />
    
                <span><b>Password</b><input type="password" name="password" placeholder="password"/></span>
                <a href="./Customer">have an account? login</a>
            </form>

        </div>
            
        </>
    )
}

export  default Register;