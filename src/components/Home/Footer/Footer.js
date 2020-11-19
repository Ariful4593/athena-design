import React from 'react';
import webLogo from '../../../image/Illustration/athena.png';
import facebook from '../../../image/Illustration/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../../image/Illustration/twitter (4)@2x.png';
import linkedIn from '../../../image/Illustration/linkedin (2)@2x.png';
import drible from '../../../image/Illustration/dribbble (1)@2x.png';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="container footer-container">
            <div className="row">
                <div className="col-md-5">
                    <ul>
                        <li><img className="w-25" src={webLogo} alt="" /></li>
                        <br />
                        <li><Link to="/"><img className="mr-sm-2" src={facebook} alt="" /></Link><Link to="/"><img className="mr-sm-2" src={twitter} alt="" /></Link><Link to="/"><img className="mr-sm-2" src={linkedIn} alt="" /></Link><Link to="/"><img src={drible} className="mr-sm-2" alt="" /></Link></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li><Link to="/">Features</Link></li>
                        <li><Link to="/">Enterprise</Link></li>
                        <li><Link to="/">Pricing</Link></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Help Center</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">Status</Link></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Terms of Service</Link></li>
                        <li><Link to="/">Sequrity</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;