import React from 'react'
import Profile from './Profile'
import man from './img/seth.jpg'
import man21 from './img/man21.jpg';
import man23 from './img/man23.jpg';
import man24 from './img/man24.jpg';
import man25 from './img/man25.jpg';
import man26 from './img/man26.jpg';
import man27 from './img/man27.jpg';
import man28 from './img/man28.jpg';
import man29 from './img/man29.jpg';
import man30 from './img/man30.jpg';
import man40 from './img/man40.jpg';
import man50 from './img/man50.jpg';
import woman2 from './img/woman2.jpg';
import woman3 from './img/woman3.jpg';
export const Refrigirator = () => {
    return (
        <>
        <div className="profiles">
            <Profile
                profile={man21}
                name="Mohan Desai"
                age=" Age - 30"
                speciality="Refrigarator Reparing"
                experience="Experience = 5 yrs+"
                charges="Rs. 4000 per hr"
                address="Address: Virginia"
                vaccinated="Vaccination:Done"

            />
            <Profile
                profile={man30}
                name="Sushant Jadeja"
                age=" Age - 28"
                speciality="Electronics Repairing"
                experience="Experience = 1yrs+"
                charges="Rs. 1000 per hr"
                address="Address: Bristol"
                vaccinated="Vaccination:Done"

            />

                <Profile
                profile={man23}
                name="Manoj Marawai"
                age=" Age - 36"
                speciality="Electronic Hardware Reparing"
                experience="Experience = 14 yrs+"
                charges="Rs. 1500 per hr"
                address="Address: Moscow"
                vaccinated="Vaccination: only first doze"

                />

                <Profile
                profile={man24}
                name="Aman Yadav"
                age=" Age - 42"
                speciality="Refrigrator"
                experience="Experience = 10 yrs+"
                charges="Rs. 3000 per hr"
                address="Address: Dortmund"
                vaccinated="Vaccination:none"

                />

                <Profile
                profile={woman2}
                name="Reena Kaur"
                age=" Age - 20"
                speciality="Electronic Repairing"
                experience="Experience = 10 years"
                charges="Rs. 2000 per hr"
                address="Address: Stockholm"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man26}
                name="Manjeet Sangwan"
                age=" Age - 30"
                speciality="Electrical Reparing"
                experience="Experience = 10 years"
                charges="Rs. 2400 per hour"
                address="Address: Copenhagen"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man27}
                name="Gaurav Kumar"
                age=" Age - 35"
                speciality="Hardware Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />

                <Profile
                profile={woman3}
                name="Amita Singh"
                age=" Age - 45"
                speciality="Microprocessor Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />
                <Profile
                profile={man29}
                name="Rajat Shah"
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

export default Refrigirator;