import React from 'react'
import './services.css'
function Services() {
    return (
        <div>
            <div className="row" id='mainServices'>
                <div className="col-4">
                    <span className='h5'>Plumbing</span>  <span className='text-muted'>for those Area
                        where like to change</span>
                    <span className='h5'>Nowhere.</span>
                </div>
                <div className="col">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque dolorum, quo maxime odit veritatis eos. Molestias commodi veniam, optio inventore cumque, aperiam rerum fugiat accusamus autem totam, vel iste.</p>
                </div>
            </div>
            <div className="row" >
                <div className="col-2 " ></div>
                <div className="col-3">
                    <span><i class="fa-solid fa-wand-magic-sparkles"></i></span>
                </div>
                <div className="col-3">
                    <span><i class="fa-brands fa-get-pocket"></i></span>

                </div>
                <div className="col-3">
                    <span><i class="fa-solid fa-bug"></i></span>

                </div>
            </div>
            <div className="row" id='service2'>
                <div className="col-2">

                </div>
                <div className="col-3">


                    <h5>Maintenance</h5>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quod!</p>
                </div>
                <div className="col-3">

                    <h5>Residental Service</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quod!</p>
                </div>
                <div className="col-3">
                    <h5>Commercial Services</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quod!</p>
                </div>
            </div>

        </div>
    )
}

export default Services
