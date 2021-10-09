import React from 'react'
import './App.css'

export const Customer = () => {
    return (
        <>
        <div className="customer">
            <h1>Login as a customer</h1>

            <form action="" className="login flex-box-8">
            
                <span><b>Email - </b><input type="email" name="name-cus" placeholder="email"/></span>
                <br />
    
                <span><b>Password</b><input type="password" name="name-cus" placeholder="password"/></span>
                <a href="./Register">Dont have an account? Sign up</a>
            </form>

        </div>
            
        </>
    )
}

export  default Customer;