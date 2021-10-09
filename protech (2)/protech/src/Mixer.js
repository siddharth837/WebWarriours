import React from 'react'
import Profile from './Profile'
import man from './img/seth.jpg'
import man31 from './img/man30.jpg';
import man34 from './img/man34.jpg';
import man33 from './img/man33.jpg';
import man35 from './img/man34.jpg';
import man36 from './img/man36.jpg';
import man37 from './img/man37.jpg';
import woman5 from './img/woman5.jpg'
import woman6 from './img/woman6.jpg'
import woman7 from './img/woman7.jpg'



export const Mixer = () => {
    return (
        <>
        <div className="profiles">
            <Profile
                profile={man31}
                name="Jack Ryan"
                age=" Age - 30"
                speciality="Hardware Reparing"
                experience="Experience = 5 yrs+"
                charges="Rs. 4000 per hr"
                address="Address: Virginia"
                vaccinated="Vaccination:Done"

            />
            <Profile
                profile={woman5}
                name="Emily Ruttenburg"
                age=" Age - 28"
                speciality="Virus Detection"
                experience="Experience = 1yrs+"
                charges="Rs. 1000 per hr"
                address="Address: Bristol"
                vaccinated="Vaccination:Done"

            />

                <Profile
                profile={woman6}
                name="Jennifer Lawrania"
                age=" Age - 36"
                speciality="Virus Detection"
                experience="Experience = 14 yrs+"
                charges="Rs. 1500 per hr"
                address="Address: Moscow"
                vaccinated="Vaccination: only first doze"

                />

                <Profile
                profile={man34}
                name="Smith Schmidt"
                age=" Age - 42"
                speciality="Signal Manager"
                experience="Experience = 10 yrs+"
                charges="Rs. 3000 per hr"
                address="Address: Dortmund"
                vaccinated="Vaccination:none"

                />

                <Profile
                profile={man}
                name="Ema Garnier"
                age=" Age - 20"
                speciality="Smartphone Specialist"
                experience="Experience = 10 years"
                charges="Rs. 2000 per hr"
                address="Address: Stockholm"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man35}
                name="Matt Tres"
                age=" Age - 30"
                speciality="Screen Repairers"
                experience="Experience = 10 years"
                charges="Rs. 2400 per hour"
                address="Address: Copenhagen"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man36}
                name="Gearge Carry"
                age=" Age - 35"
                speciality="Hardware Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />

                <Profile
                profile={woman7}
                name="Geeta Rajput"
                age=" Age - 45"
                speciality="Microprocessor Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />
                <Profile
                profile={man37}
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

export default Mixer;