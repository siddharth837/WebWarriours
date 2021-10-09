import React from 'react'
import Footer from './Footer'
import profile from './img/profile.png'

export const FindWork = () => {
    return (
        <div className="Find-work">
            <h1>Are you a Technician, Looking for work?</h1>

            <div className="flex-box-2">
                <div className="left-card">

                    <div className="img-name">
                        <img src={profile} />
                        <h2>John Skims</h2>
                    </div>
                    <br />
                    <div className="other-content">
                        <h2>Focus Area - Smart phones</h2>
                        <h2>Vaccinated <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
                        </svg></h2>
                        <h2>Experience - 3+ yrs</h2>
                        <h2>Location - 3 km</h2>
                        <button id="btn-ui">View Profile</button>
                    </div>



                </div>

                <br /><br /><br /><br />

                <div className="right-form">
                    <form action="">
                        <div className="left-left-form">
                            <input type="text" name="name" placeholder="Name - John Skims" required />
                            <input type="email" name="email" placeholder="Email - Johnskims@email.com"  required />
                            <input type="text" name="phone-number" placeholder="Mobile Number - 9898978678"  required />
                            <select name="vaccinated" placeholder="Available for home Services" required>
                            <option value="1">Vaccinated for Covid-19</option>
                            <option value="yes">Yes</option>
                            <option value="yes">No</option>
                        </select>
                      
                          

                        </div>


                        <div className="right-right-form">
                            <input type="text" name="Experience" placeholder="Experience -  3 yrs"  required />
                            <input type="text" name="address" placeholder="Work Address"  required />
                            <select name="Home-services" required>
                                <option value="1">Available for home Services</option>
                                <option value="yes">Yes</option>
                                <option value="yes">No</option>
                            </select>



                            <select name="charges" required>
                                <option value="1">Charges per hour</option>
                                <option value="yes">Yes</option>
                                <option value="yes">No</option>
                            </select>

                            <input type="text" name="address" placeholder="Skills - Smart phones"  required />
                            <input type="text" name="address" placeholder="Speciality"  required />


                        </div>
                        <button type="submit">Submit</button>

                    </form>


                </div>

            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />

            <Footer />
        </div>


    )
}
