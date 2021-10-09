import React,{useEffect} from 'react'
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import logo from './img/logo-2.png'

export const Navbar = () => {
    useEffect(() => {
        Aos.init({duration:2500});
    },[])


    return (
        <div className="Nav">
            <a href="/"> <div className="left">
                <img src={logo} alt="logo" /></div></a>
            <div className="right">
                <a href="./Hireatechnician" ><button className="btn hat" data-Aos="zoom-out-left">Hire a technician</button></a>
                <a href="./Findwork"> <button className="btn fw" data-Aos="zoom-out-left">Find work</button></a>
                <a href="./Customer"> <button className="btn cl" data-Aos="zoom-out-left">Customer Login</button></a>
            
            </div>
        </div>
    )
}
