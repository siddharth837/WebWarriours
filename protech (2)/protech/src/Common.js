import React,{useEffect} from 'react'
import './App.css'
import { Navbar } from './Navbar'
import Aos from 'aos';
import 'aos/dist/aos.css'

export const Common = () => {
    useEffect(() => {
    Aos.init({duration:2500});
    },[])

    return (
        <>
            <div id="How-to" className="how-to-use">
            <br /><br />   <br /><br />   <br /><br />
        <h1 data-aos="zoom-out-right">How it works</h1>

        <div className="flex-box">
          <div className="ui"></div>

        
          <div className="content">

            <h1 data-aos="zoom-out-left">Are you a Technician?</h1>
            <h4 data-aos="zoom-out-left">Are you a Technician looking for clients, well say no to unemployement. 
              <br /> Protech Allows you to find Real Customers who are in need to get 
              <br /> Their devices fixed. Sign up now and find potential customers Instantly.</h4>
            <h1 data-aos="zoom-out-right">Are you a Customer?</h1>
            <h4 data-aos="zoom-out-right">Protech Brings you the best Technicians from around your Area. Protech <br />
            is a one place Solution for you to get your Devices fixed Instantly. </h4>

          </div>
        </div>
      </div>
        </>
    )
}

export default Common;