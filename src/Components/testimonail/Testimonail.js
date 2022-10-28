import React, { Fragment } from 'react'
import Item from './Item';
import Carousel from "react-elastic-carousel";
import './testimonail.css'
import Card from 'react-bootstrap/Card'
import saqib from './../../assets/saqib.jpeg'
import imranKhan from './../../assets/imrankhan.jpg'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];
function Testimonail() {


    return (
        <Fragment>
            <div className="row  mt-5  px-5">

                <div className="col">
                    <div className=" card-10" id='card'>
                        <div className='spanNumbers mt-5 '>2536</div>
                        <span>Happy Clients</span>
                    </div>

                </div>
                <div className="col">
                    <div className=" card-10" id='card'>
                        <div className='spanNumbers mt-5 '>6784</div>
                        <span>Total Projects</span>
                    </div>

                </div>
                <div className="col">
                    <div className=" card-10" id='card'>
                        <div className='spanNumbers mt-5 '>1059</div>
                        <span>Cups Coffee</span>
                    </div>

                </div>
                <div className="col">
                    <div className=" card-10" id='card'>
                        <div className='spanNumbers mt-5 '>12239</div>
                        <span>Tickets Submitted</span>
                    </div>

                </div>
            </div>
            <div className="row mt-5" >
                <div className="col" id='videoBanner' >
                    <h3 className='videoHead mt-5'>Explore ourself in a new way</h3>
                    <p className='videoPara' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatem ipsum est non quas consequuntur debitis vitae aliquam, suscipit esse.</p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col" id='row44'>
                    <h4 className='head4'>Got Impressed to our features</h4>
                    <p className='para4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ab, perferendis autem illo unde </p>
                    <div className='text-center'>
                        <button className='button1'>Get A Free Quote</button>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col">
                    <h3 className='head3'>What our Client’s Say about us</h3>
                    <p className='para3'>Who are in extremely love with eco friendly system.</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="App1">
                        <Carousel breakPoints={breakPoints} className="px-5" enableAutoPlay>
                            <div>
                                <Card style={{ width: '12rem', height: "370px" }} id="wholeCard">
                                    <Card.Img className='mt-3' variant="top" src={imranKhan} id="clientImage" />
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text id="cardText">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat accusantium placeat eum necessitatibus reiciendis saepe libero ea dolorum fugit ex!
                                        </Card.Text>

                                        <div className='text-center'>
                                            <span className='clientName text-center'>Imran khan</span> <br />
                                            <span className='clientJob'>Developer At BrainsPk</span>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '12rem', height: "370px" }} id="wholeCard">
                                    <Card.Img className='mt-3' variant="top" src={saqib} id="clientImage" />
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text id="cardText">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat accusantium placeat eum necessitatibus reiciendis saepe libero ea dolorum fugit ex!
                                        </Card.Text>

                                        <div className='text-center'>
                                            <span className='clientName text-center'>Saqib khan</span> <br />
                                            <span className='clientJob'>Developer At BrainsPk</span>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                           
                            <div>
                                <Card style={{ width: '12rem', height: "370px" }} id="wholeCard">
                                    <Card.Img className='mt-3' variant="top" src={saqib} id="clientImage" />
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text id="cardText">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat accusantium placeat eum necessitatibus reiciendis saepe libero ea dolorum fugit ex!
                                        </Card.Text>

                                        <div className='text-center'>
                                            <span className='clientName text-center'>Saqib khan</span> <br />
                                            <span className='clientJob'>Developer At BrainsPk</span>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '12rem', height: "370px" }} id="wholeCard">
                                    <Card.Img className='mt-3' variant="top" src={saqib} id="clientImage" />
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text id="cardText">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat accusantium placeat eum necessitatibus reiciendis saepe libero ea dolorum fugit ex!
                                        </Card.Text>

                                        <div className='text-center'>
                                            <span className='clientName text-center'>Saqib khan</span> <br />
                                            <span className='clientJob'>Developer At BrainsPk</span>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '12rem', height: "370px" }} id="wholeCard">
                                    <Card.Img className='mt-3' variant="top" src={saqib} id="clientImage" />
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text id="cardText">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat accusantium placeat eum necessitatibus reiciendis saepe libero ea dolorum fugit ex!
                                        </Card.Text>

                                        <div className='text-center'>
                                            <span className='clientName text-center'>Saqib khan</span> <br />
                                            <span className='clientJob'>Developer At BrainsPk</span>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Testimonail
