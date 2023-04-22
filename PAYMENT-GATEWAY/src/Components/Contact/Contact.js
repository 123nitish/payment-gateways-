import React from 'react';
import Grow from '@mui/material/Grow';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <Grow in>
                <div className='header contact align-items-center'>
                    <div className='row landing'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1 row1'>
                            <div className='intro'>
                                <h1 style={{ textAlign: "center" }} >The Sparks Foundation</h1>
                                <p style={{ textAlign: "center" }} >Write to us at <br /> theSparksFoundation@tsp.com </p>
                                <div className='icon'>
                                    <a href="https://www.facebook.com/" target="_blank"><FacebookOutlinedIcon sx={{ color: "#1877F2" }} /></a>
                                    <a href="https://www.instagram.com/" target="_blank"><InstagramIcon sx={{ color: "#E4405F" }} /></a>
                                    <a href="https://twitter.com/" target="_blank"><TwitterIcon sx={{ color: "#1DA1F2" }} /></a>
                                    <a href="https://www.youtube.com/" target="_blank"><YouTubeIcon sx={{ color: "#CD201F" }} /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2 picturecontact row2'>
                        </div>
                    </div>
                </div>
            </Grow>
        </>
    )
}

export default Contact;