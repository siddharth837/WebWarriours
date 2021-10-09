import React,{useEffect} from 'react'
import About from './About';
import './App.css';
import Common from './Common';
import Footer from './Footer';
import Service from './Service';
import Aos from 'aos';
import 'aos/dist/aos.css'


export const Home = () => {
    useEffect(() => {
        Aos.init({duration:2500});
    },[])


    return (
        <div>
            <div className="title"  data-0-top="opacity:0;left:100px" data-200-top="opacity:1;left:0px">
                <br />
                <h1>Protech</h1>
         



                <h3 >One place for you to get your devices fixed</h3>

                <a href="#How-to"><button className="usage">How it Works</button></a>

                <a href="#about">< button className="queries">Queries</button></a>

                <br /><br /><br /><br /> <br /><br /><br />

                <Common />

                <About />
                <Service />

                <Footer />
            </div>





        </div>
    )
}
