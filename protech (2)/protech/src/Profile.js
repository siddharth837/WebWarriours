import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

export const Profile = (props) => {
    useEffect(() => {
        Aos.init({duration:2500});
    },[])


    return (
        <>

        <div className="main-profile" data-Aos="zoom-out-up">

        <div className="profiles">
            <div className="profile"  data-Aos="zoom-out-up">
                <div className="profileImage">
                <img src={props.profile}/>
                <button  className="submitButton"> HIRE ME</button>
                </div>
                
                <div className="about-tech" data-Aos="zoom-out-down">
                    <p>{props.name}</p>
                    <p>{props.age}</p>
                    <p>{props.experience}</p>
                    <p>{props.charges}</p>
                    <p>{props.speciality}</p>
                    <p>{props.address}</p>
                    <p>{props.vaccinated}</p>
                </div>
            </div>
            
        </div>
        
        </div>
            
        </>
    )
}

export default Profile
