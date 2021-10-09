import React from 'react'
import Profile from './Profile'
import man from './img/seth.jpg'
import man57 from './img/man57.jpg';
import man58 from './img/man58.jpg';
import man59 from './img/man59.jpg';
import man60 from './img/man60.jpg';
import man61 from './img/man61.jpg';
import man62 from './img/man62.jpg';
import man63 from './img/man63.jpg';
import woman16 from './img/woman18.png';
import woman17 from './img/woman17.jpg';

export const Other = () => {
    return (
        <>
        <div className="profiles">
            <Profile
                profile={man57}
                name="Jayant Gupta"
                age=" Age - 30"
                speciality="Refrigarator Reparing"
                experience="Experience = 5 yrs+"
                charges="Rs. 4000 per hr"
                address="Address: Virginia"
                vaccinated="Vaccination:Done"

            />
            <Profile
                profile={man58}
                name="Rajesh Maniwikar"
                age=" Age - 28"
                speciality="Electronics Repairing"
                experience="Experience = 1yrs+"
                charges="Rs. 1000 per hr"
                address="Address: Bristol"
                vaccinated="Vaccination:Done"

            />

                <Profile
                profile={man59}
                name="Ankush Jain"
                age=" Age - 36"
                speciality="Electronic Hardware Reparing"
                experience="Experience = 14 yrs+"
                charges="Rs. 1500 per hr"
                address="Address: Moscow"
                vaccinated="Vaccination: only first doze"

                />

                <Profile
                profile={man60}
                name="Mahesh Chandani"
                age=" Age - 42"
                speciality="Refrigrator"
                experience="Experience = 10 yrs+"
                charges="Rs. 3000 per hr"
                address="Address: Dortmund"
                vaccinated="Vaccination:none"

                />

                <Profile
                profile={woman16}
                name="Amrita Gaur"
                age=" Age - 20"
                speciality="Electronic Repairing"
                experience="Experience = 10 years"
                charges="Rs. 2000 per hr"
                address="Address: Stockholm"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man61}
                name="Deepanshu Sawant"
                age=" Age - 30"
                speciality="Electrical Reparing"
                experience="Experience = 10 years"
                charges="Rs. 2400 per hour"
                address="Address: Copenhagen"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man62}
                name="Amesh Goyal"
                age=" Age - 35"
                speciality="Hardware Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />

                <Profile
                profile={woman17}
                name="Kritika Jain"
                age=" Age - 45"
                speciality="Microprocessor Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />
                <Profile
                profile={man63}
                name="Aman Dandiyawala"
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

export default Other;