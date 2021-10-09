import React from 'react'
import Profile from './Profile'
import man from './img/seth.jpg'
import man44 from './img/man44.jpg';
import man45 from './img/man48.jpg';
import man46 from './img/man49.jpg';
import man51 from './img/man51.jpg';
import man52 from './img/man52.jpg';
import man53 from './img/man53.jpg';
import woman11 from './img/woman11.png';
import woman12 from './img/woman12.png';
import woman13 from './img/woman13.png';

export const Microwave = () => {
    return (
        <>
        <div className="profiles">
            <Profile
                profile={man44}
                name="Ratan Agrawal"
                age=" Age - 30"
                speciality="Microwave Reparing"
                experience="Experience = 5 yrs+"
                charges="Rs. 4000 per hr"
                address="Address: Virginia"
                vaccinated="Vaccination:Done"

            />
            <Profile
                profile={man45}
                name="Manish Sen"
                age=" Age - 28"
                speciality="Microwave Repairing"
                experience="Experience = 1yrs+"
                charges="Rs. 1000 per hr"
                address="Address: Bristol"
                vaccinated="Vaccination:Done"

            />

                <Profile
                profile={woman11}
                name="Jaya Kumari"
                age=" Age - 36"
                speciality="Microwave Repairing"
                experience="Experience = 14 yrs+"
                charges="Rs. 1500 per hr"
                address="Address: Moscow"
                vaccinated="Vaccination: only first doze"

                />

                <Profile
                profile={man46}
                name="Akshar Kumar"
                age=" Age - 42"
                speciality="Microwave Repairing"
                experience="Experience = 10 yrs+"
                charges="Rs. 3000 per hr"
                address="Address: Dortmund"
                vaccinated="Vaccination:none"

                />

                <Profile
                profile={woman12}
                name="Manju Bali"
                age=" Age - 20"
                speciality="Microwave Repairing"
                experience="Experience = 10 years"
                charges="Rs. 2000 per hr"
                address="Address: Chandigarh"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man51}
                name="Kaushal Tiwari"
                age=" Age - 30"
                speciality="Microwave Repairing"
                experience="Experience = 10 years"
                charges="Rs. 2400 per hour"
                address="Address: Gurgaon"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man52}
                name="Akash Krishnan"
                age=" Age - 35"
                speciality="Fan Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Indore"
                vaccinated="Vaccination: No"

                />

                <Profile
                profile={man53}
                name="Prashant Sharma"
                age=" Age - 45"
                speciality="Microwave Repairing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />
                <Profile
                profile={woman13}
                name="Rani Dubey"
                age=" Age - 25"
                speciality="Microwave Repairing"
                experience="Experience = 2 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />

            
        </div>
        </>
    )
}

export default Microwave;