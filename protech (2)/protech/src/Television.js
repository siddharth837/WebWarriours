import React from 'react'
import Profile from './Profile'
import man from './img/seth.jpg'
import man54 from './img/man54.jpg';
import man55 from './img/man55.jpg';
import man56 from './img/man56.jpg';
import man57 from './img/man57.jpg';
import man58 from './img/man58.jpg';
import man59 from './img/man59.jpg';
import woman14 from './img/woman14.png';
import woman15 from './img/woman15.jpg';


export const Television = () => {
    return (
        <>
        <div className="profiles">
            <Profile
                profile={man54}
                name="Roger Fedrer"
                age=" Age - 40"
                speciality="Television Repairer"
                experience="Experience = 10 yrs+"
                charges="Rs. 2000 per hr"
                address="Address: Geneva"
                vaccinated="Vaccination:Done"

            />
            <Profile
                profile={woman14}
                name="Angela Merekel"
                age=" Age - 40"
                speciality="Cable repairer"
                experience="Experience = 20 yrs+"
                charges="Rs. 3000 per hr"
                address="Address: Berlin"
                vaccinated="Vaccination:Done"

            />

                <Profile
                profile={man56}
                name="Vladimir Lenin"
                age=" Age - 48"
                speciality="Screen Repairer"
                experience="Experience = 14 yrs+"
                charges="Rs. 1500 per hr"
                address="Address: Moscow"
                vaccinated="Vaccination: only first doze"

                />

                <Profile
                profile={man55}
                name="Kieve Jobs"
                age=" Age - 35"
                speciality="Signal Manager"
                experience="Experience = 15 yrs+"
                charges="Rs. 4000 per hr"
                address="Address: Seattle"
                vaccinated="Vaccination: done"

                />

                <Profile
                profile={woman15}
                name="greta Thunberg"
                age=" Age - 35"
                speciality="Audio Technician"
                experience="Experience = 10 years"
                charges="Rs. 2000 per hr"
                address="Address: Stockholm"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man56}
                name="peter krenkinson"
                age=" Age - 35"
                speciality="Screen Repairers"
                experience="Experience = 12 years"
                charges="Rs. 2400 per hour"
                address="Address: Copenhagen"
                vaccinated="Vaccination: done"

                />
                <Profile
                profile={man57}
                name="Robert Vadra"
                age=" Age - 35"
                speciality="Hardware Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />

                <Profile
                profile={man58}
                name="Mahendra Shergill"
                age=" Age - 45"
                speciality="Microprocessor Reparing"
                experience="Experience = 15 years"
                charges="Rs. 2800 per hour"
                address="Address: Lucknow"
                vaccinated="Vaccination: No"

                />
                <Profile
                profile={man59}
                name="Ronit Sharma"
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

export default Television;