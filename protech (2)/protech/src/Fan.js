import React from 'react'
import Profile from './Profile'
import man from './img/seth.jpg'
import man1 from './img/man2.jpg'
import man2 from './img/man3.jpg';
import man4 from './img/man4.jpg';
import man5 from './img/man5.jpg';
import man6 from './img/man6.jpg';
import man7 from './img/man7.jpg';
import man8 from './img/man8.jpg';

export const Fan = () => {
    return (
        <>
        <div className="profiles">
            <Profile
                profile={man}
                name="Somesh Chuadhary"
                age=" Age - 30"
                speciality="Fan Reparing"
                experience="Experience = 5 yrs+"
                charges="Rs. 4000 per hr"
                address="Address: Virginia"
                vaccinated="Vaccination:Done"

            />
            <Profile
                profile={man1}
                name="Matt Scot"
                age=" Age - 28"
                speciality="Fan Repairing"
                experience="Experience = 1yrs+"
                charges="Rs. 1000 per hr"
                address="Address: Bristol"
                vaccinated="Vaccination:Done"

            />

                <Profile
                profile={man2}
                name="Jennifer Lawrania"
                age=" Age - 36"
                speciality="Virus Detection"
                experience="Experience = 14 yrs+"
                charges="Rs. 1500 per hr"
                address="Address: Moscow"
                vaccinated="Vaccination: only first doze"

                />

                <Profile
                profile={man}
                name="Smith Schmidt"
                age=" Age - 42"
                speciality="Signal Manager"
                experience="Experience = 10 yrs+"
                charges="Rs. 3000 per hr"
                address="Address: Dortmund"
                vaccinated="Vaccination:none"

                />

                <Profile
                profile={man4}
                name="Ema Garnier"
                age=" Age - 20"
                speciality="Smartphone Specialist"
                experience="Experience = 10 years"
                charges="Rs. 2000 per hr"
                address="Address: Stockholm"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man5}
                name="Matt Tres"
                age=" Age - 30"
                speciality="Screen Repairers"
                experience="Experience = 10 years"
                charges="Rs. 2400 per hour"
                address="Address: Copenhagen"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man6}
                name="Shaun kjellberg"
                age=" Age - 35"
                speciality="Fan Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />

                <Profile
                profile={man7}
                name="Mohit Awasthi"
                age=" Age - 45"
                speciality="Fan Repairing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />
                <Profile
                profile={man8}
                name="Rani Dubey"
                age=" Age - 25"
                speciality="Electric Reparings"
                experience="Experience = 2 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />

            
        </div>
        </>
    )
}

export default Fan;