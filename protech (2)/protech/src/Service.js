import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
export const Service = () => {
    useEffect(() => {
        Aos.init({duration:2500});
        },[])



    return (
        <>
            <div className="service" id="service" data-Aos="zoom-out-up">
                <h1 data-Aos="zoom-out-up">Our Services</h1>

                <div className="service-cards">
                    <div className="s-card" id="s-card-1" data-Aos="zoom-out-up">
                        <h2 ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
                        </svg>  Best Technicians</h2>

                        <p>We provide you best technicians around your locality.They are skilled ,productive and fruitful in their various fields including electronic items starting from big television to small mixer grinder with home service.
                            For us customer satisfaction is priceless.We try to provide best of ours.
                        </p>
                    </div>
                    <div className="s-card" id="s-card-2" data-Aos="zoom-out-up">
                        <h2><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                        </svg> At home Services</h2>

                        <p data-Aos="zoom-out-up">We provide home service as we care for you ease and comfort .By providing home service it not only reduces cost of reapring their items but also burden for the customers.!</p>
                    </div>
                    <div className="s-card" id="s-card-3" data-Aos="zoom-out-up">
                        <h2> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-signpost-split" viewBox="0 0 16 16">
                            <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z" />
                        </svg>On site services</h2>

                        <p>We provide on site services to our customers which help you repair or exchange the product at your location.By providing reparation or exchanging the product at your location will imporove efficiency, control cost and provides you consistent support of out team of tech.!</p>
                    </div>
                    <div className="s-card" id="s-card-4">
                        <h2><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                        </svg> Secure and easy transaction</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veniam a officiis sequi quisquam ratione animi architecto alias? Nihil quibusdam voluptatum, eligendi odio similique doloribus eaque saepe. Minus, voluptate sequi!</p>
                    </div>
                </div>

                <br /><br /><br /><br />
            </div>
        </>
    )
}

export default Service;
