import React, { Fragment } from 'react'
import './contactus.css'
function ContactUs() {
    return (
        <Fragment>
            <div id='bg'>
                <div className="row">
                    <div className="col-1">

                    </div>
                    <div className="col-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d45733.6014839696!2d72.45272876538141!3d34.13604292828021!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d33.2681293!2d71.498359!4m3!3m2!1d34.1602665!2d72.3886911!5e0!3m2!1sen!2s!4v1652350032286!5m2!1sen!2s" style={{ width: "400px", height: "500px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-6 mt-4">
                        <form >
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" />
                            </div> <br />
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=" Enter your Email Address
                            
                            " />
                            </div> <br />
                            <div className="form-group2">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Enter your Message"></textarea>
                            </div> <br />
                            <div>
                                <button className='messageButton'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactUs
