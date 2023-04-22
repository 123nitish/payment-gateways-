import React, { useEffect } from 'react';
import './Donate.css';
import Grow from '@mui/material/Grow';
// 

const Donate = () => {

    useEffect(() => {
        const Script = document.createElement("script");
        const Form = document.getElementById('payment');
        Script.setAttribute('src', 'https://checkout.razorpay.com/v1/payment-button.js')
        Script.setAttribute('data-payment_button_id', 'pl_Ik2d7fr7BOdneg')
        Form.appendChild(Script);
    }, [])

    return (
        <>
            <Grow in>
                <div div className='donate align-items-center'>
                    <div className='row landing'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1 row1'>
                            <div className='details'>
                                <h1 class="heading" style={{ textAlign: "center" }}>
                                    Lets Make A Change Together!
                                </h1>
                                <h3 style={{ textAlign: "center" }}>
                                    Giving is not just about making a donation, <br /> its about making difference. <br />
                                    <br /> <br /> Any help or donation,<br /> no matter how small or big,<br /> will be deeply appriciated and
                                    is much needed.
                                </h3>
                                <form id="payment" style={{ textAlign: "center" }}>
                                </form>
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

export default Donate


