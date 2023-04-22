import React from 'react';
import { NavLink } from 'react-router-dom';
import Grow from '@mui/material/Grow';
import './Homepage.css';

const Homepage = () => {
    return (
        <>
            <Grow in>
                <div className='header align-items-center'>
                    <div className='row landing'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1 row1'>
                            <div className='intro'>
                                <h1 style={{ textAlign: "center" }} >The Sparks Foundation</h1>
                                <p style={{ textAlign: "center" }} >If the money we donate <br /> helps one child or <br /> can ease the pain of one parent,<br /> those funds are well spent.</p>
                                <p style={{ textAlign: "center" }} >Come and join the good cause.</p>
                                <div style={{ textAlign: "center" }} className='mt-3'>
                                    <NavLink className='btn-get-started' to={"/donate"}>Donate</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2 picture row2'>
                        </div>
                    </div>
                </div>
            </Grow>
        </>
    )
}

export default Homepage;