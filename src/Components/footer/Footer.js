import React, { Fragment } from 'react'
import './footer.css'
function Footer() {
    return (
        <Fragment>
            <div id='background1'>
                <div className="row mt-5">
                    <div className="col-1">

                    </div>
                    <div className="col">
                        <h4 className="footerHeading">About Us </h4>
                        <p className="footerParagraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, incidunt illo. Repellendus eius error ipsum!</p>
                        <p className="footerParagraph">Copyright ©2022 All rights reserved | This template is made by
                            &nbsp; <span className='footerName'>Imran khan</span>  Front end developer at Brainspk</p>
                    </div>
                    <div className="col">
                        <h4 className="footerHeading">Newsletter </h4>
                        <p className="footerParagraph">Stay update with our latest</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn " type="button" id="button-addon2"><i class="fa-solid fa-arrow-right"></i></button>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className="footerHeading">Follow Us </h4>
                        <p className="footerParagraph" >Let us be social</p>
                        <span>
                            <i class="fa-brands fa-facebook" id='icons'></i>
                        </span>&nbsp;
                        <span>
                            <i class="fa-brands fa-whatsapp" id='icons'></i>
                        </span>&nbsp;
                        <span>
                            <i class="fa-brands fa-instagram" id='icons'></i>
                        </span>&nbsp;
                        <span>
                            <i class="fa-solid fa-phone" id='icons'></i>
                        </span>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Footer
