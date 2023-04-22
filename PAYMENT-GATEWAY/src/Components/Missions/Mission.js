import React from 'react';
import Grow from '@mui/material/Grow';
import Education from '../../Images/education.jpg';
import Distribution from '../../Images/distribution.jpg';
import Meals from '../../Images/meals.jpg';
import './Mission.css';

const Mission = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Missions</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            <Grow in>
                                <div className='col-lg-4 col-10 mx-auto'>
                                    <div class="card">
                                        <img src={Education} class="card-img-top" alt="Imag" style={{ height: "250px" }} />
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">Education</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                        </div>
                                    </div>
                                </div>
                            </Grow>
                            <Grow in>
                                <div className='col-lg-4 col-10 mx-auto'>
                                    <div class="card">
                                        <img src={Distribution} class="card-img-top" alt="Imag" style={{ height: "250px" }} />
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">Fight against Covid-19</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                                        </div>
                                    </div>
                                </div>
                            </Grow>
                            <Grow in>
                                <div className='col-lg-4 col-10 mx-auto'>
                                    <div class="card">
                                        <img src={Meals} class="card-img-top" alt="Imag" style={{ height: "250px" }} />
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">Food for All</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                                        </div>
                                    </div>
                                </div>
                            </Grow>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mission;
