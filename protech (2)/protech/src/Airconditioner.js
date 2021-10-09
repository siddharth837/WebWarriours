import React from 'react'
import Profile from './Profile'

import man38 from './img/man38.jpg'

import man41 from './img/man41.jpg'
import man42 from './img/man42.jpg'
import man43 from './img/man43.jpg'
import woman7 from './img/woman7.jpg'
import woman8 from './img/woman8.jpg'
import woman9 from './img/woman9.jpg'
import woman10 from './img/woman10.png'
import woman11 from './img/woman11.png'
export const Airconditioner = () => {
    return (
        <>
        <div className="profiles">
            <Profile
                profile={man38}
                name="Jheel Kumar Meheta"
                age=" Age - 30"
                speciality="Hardware Reparing"
                experience="Experience = 5 yrs+"
                charges="Rs. 4000 per hr"
                address="Address: Virginia"
                vaccinated="Vaccination:Done"

            />
            <Profile
                profile={woman7}
                name="Shazia Anjum"
                age=" Age - 28"
                speciality="Virus Detection"
                experience="Experience = 1yrs+"
                charges="Rs. 1000 per hr"
                address="Address: Bristol"
                vaccinated="Vaccination:Done"

            />

                <Profile
                profile={woman8}
                name="Jullie Seth"
                age=" Age - 36"
                speciality="Virus Detection"
                experience="Experience = 14 yrs+"
                charges="Rs. 1500 per hr"
                address="Address: Moscow"
                vaccinated="Vaccination: only first doze"

                />

                <Profile
                profile={woman9}
                name="Smith Schmidt"
                age=" Age - 42"
                speciality="Signal Manager"
                experience="Experience = 10 yrs+"
                charges="Rs. 3000 per hr"
                address="Address: Dortmund"
                vaccinated="Vaccination:none"

                />

                <Profile
                profile={woman10}
                name="Rashmi Raman"
                age=" Age - 20"
                speciality="Ac Specialist"
                experience="Experience = 10 years"
                charges="Rs. 4000 per hr"
                address="Address: Moscow"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man41}
                name="Matt Tres"
                age=" Age - 30"
                speciality="AC Repairers"
                experience="Experience = 10 years"
                charges="Rs. 2400 per hour"
                address="Address: Copenhagen"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man42}
                name="Gautam Sharma"
                age=" Age - 35"
                speciality="AC Hardware Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />

                <Profile
                profile={woman11}
                name="Garima Yadav"
                age=" Age - 45"
                speciality="AC Parts Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />
                <Profile
                profile={man43}
                name="Monoj Goswami"
                age=" Age - 25"
                speciality="AC Technician"
                experience="Experience = 2 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />

            
        </div>
        </>
    )
}

export default Airconditioner;