import React, { useEffect } from 'react'
import about from './img/about.png'
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

export const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2500 });
    }, [])



    return (
        <>
            <div className="about" id="about">
                <h1 data-Aos="zoom-out-up">About us</h1>
                <div className="flex-box-7">
                    <div className="head-ing">
                        <h2 >The pandemic and the long lockdown period left people hanging in the balance between survival and making ends meet.  People are still suffering from financial problems, owing to rising unemployment and hefty medical bills.

                            Protech is a one stop solution for people who are frustrated with their damaged devices. It helps users find a technician for at-home services or on-site services without stepping out of the protected boundaries of their homes. Where the prices of electronic and digital devices have been on the rise ever since “work from home” became the sole solution to keep the world going, people are reluctant to purchase new devices and they prefer getting their already existing but malfunctioning devices to start working again.

                          

                        </h2>

                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                        <h2 >Technicians on the other hand can find their first or next client through
                            protech. Protech allows Technicians to find their potential customers </h2>
                    </div>
                    <div className="image-4" data-Aos="zoom-out-right">
                        <img src={about} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default About;