import React from 'react'
import Profile from './Profile'
import man from './img/seth.jpg'
import man9 from './img/man9.jpg';
import man10 from './img/man10.jpg'
import man11 from './img/man11.jpeg';
import man12 from './img/man12.jpg';
import man13 from './img/man13.jpg';
import man18 from './img/man18.jpeg';
import man20 from './img/man20.jpg';
import man15 from './img/man15.jpg';


import man17 from './img/man17.jpeg';

export const Smartphone = () => {
    return (
        <>
        <div className="profiles">
            <Profile
                profile={man9}
                name="Jack Ryan"
                age=" Age - 30"
                speciality="Hardware Reparing"
                experience="Experience = 5 yrs+"
                charges="Rs. 4000 per hr"
                address="Address: Virginia"
                vaccinated="Vaccination:Done"

            />
            <Profile
                profile={man10}
                name="Emily Ruttenburg"
                age=" Age - 28"
                speciality="Virus Detection"
                experience="Experience = 1yrs+"
                charges="Rs. 1000 per hr"
                address="Address: Bristol"
                vaccinated="Vaccination:Done"

            />

                <Profile
                profile={man11}
                name="Jennifer Lawrania"
                age=" Age - 36"
                speciality="Virus Detection"
                experience="Experience = 14 yrs+"
                charges="Rs. 1500 per hr"
                address="Address: Moscow"
                vaccinated="Vaccination: only first doze"

                />

                <Profile
                profile={man12}
                name="Smith Schmidt"
                age=" Age - 42"
                speciality="Signal Manager"
                experience="Experience = 10 yrs+"
                charges="Rs. 3000 per hr"
                address="Address: Dortmund"
                vaccinated="Vaccination:none"

                />

                <Profile
                profile={man13}
                name="Ema Garnier"
                age=" Age - 20"
                speciality="Smartphone Specialist"
                experience="Experience = 10 years"
                charges="Rs. 2000 per hr"
                address="Address: Stockholm"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man18}
                name="Matt Tres"
                age=" Age - 30"
                speciality="Screen Repairers"
                experience="Experience = 10 years"
                charges="Rs. 2400 per hour"
                address="Address: Copenhagen"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man15}
                name="Gearge Carry"
                age=" Age - 35"
                speciality="Hardware Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />

                <Profile
                profile={man20}
                name="Geeta Rajput"
                age=" Age - 45"
                speciality="Microprocessor Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />
                <Profile
                profile={man17}
                name="Soham Kashyap"
                age=" Age - 25"
                speciality="Hardware and Software Reparing"
                experience="Experience = 2 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />

            
        </div>
        </>
    )
}

export default Smartphone;