import React from 'react';
import img from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content mt-20">
            <div>
                <img className='imglogo' src={img} alt="" />
                <p className="font-bold">
                    THE-FLYTOGRAPHER-LENS
                </p>
                <p>jubairahmed060@gmail.com</p>
            </div>

        </footer>
    );
};

export default Footer; <h2>This is footer</h2>