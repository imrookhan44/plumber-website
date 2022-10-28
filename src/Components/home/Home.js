import React, { Fragment } from 'react'
import './home.css'
import banner from './../../assets/banner.jpg'
function Home() {
    return (
        <Fragment>
            {/* <img src={banner} alt="" srcset="" className='image' /> */}
            <div id='mainHead'>
                <div id='head1'>
                    WE’RE YOUR PLUMBER
                </div>
                <div id="head2">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero illo commodi blanditiis et quaerat consequuntur eum consectetur voluptatibus doloribus expedita.
                    </p>
                </div>
                <div>
                    <button className='buyButton'>Buy Now For $9.99</button>
                </div>
            </div>


        </Fragment>
    )
}

export default Home
