import React, { Fragment } from 'react'
import banner2 from './../../assets/banner2.jpg'
import './features.css'
function Features() {
    return (
        <Fragment >
            <div className="row" id="fragment">
                <div className="col-4">
                    <img src={banner2} alt="" srcset="" id='banner2' />
                </div>
                <div className="col-8">
                    <p className='paragraph'>Features That make us Unique
                    </p>

                    <p className='paragraph2'>Who are in extremely love with eco friendly system.</p>
                    <div className="row">
                        <div className="col">
                            <div class="card card-1">
                                <h4 className='heading4'>Multiple Layouts</h4>
                                <p className='mainpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio tenetur vitae quidem fuga dolore ipsam nemo corporis voluptas suscipit.</p>
                            </div>
                        </div>
                        <div className="col">

                            <div class="card card-1">
                                <h4 className='heading4'>Endless Features</h4>
                                <p className='mainpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio tenetur vitae quidem fuga dolore ipsam nemo corporis voluptas suscipit.</p>

                            </div>
                        </div>
                        <div className="col">

                            <div class="card card-1">
                                <h4 className='heading4'>Clean Coding</h4>
                                <p className='mainpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio tenetur vitae quidem fuga dolore ipsam nemo corporis voluptas suscipit.</p>
                            </div>
                        </div>
                        <div className="col">

                            <div class="card card-1">
                                <h4 className='heading4'>Fully Customizable</h4>
                                <p className='mainpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio tenetur vitae quidem fuga dolore ipsam nemo corporis voluptas suscipit.</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </Fragment>
    )
}

export default Features
