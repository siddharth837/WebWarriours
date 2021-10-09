import React,{useEffect} from 'react'
import logo from './img/logo.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

export const Footer = () => {
    useEffect(() => {
        Aos.init({duration:2500});
    },[])


    return (
        <>
        <div className="footer">
            <div className="logo">
                <img src={logo} />
            </div>

            <div className="imp-links">
                <h1 className="foot-head">Important Links</h1>
                <ul>
                    <li><a href="./Hireatechnician">Hire a Technician</a></li>
                    <li><a href="/Findwork">Find Work</a></li>
                    <li><a href="#How-to">How it works</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>

            </div>

            <div className="company">
            <h1 className="foot-head">Company</h1>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Customer service</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>

            </div>
        </div>
            
        </>
    )
}

export default Footer;
