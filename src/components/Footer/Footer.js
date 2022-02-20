import React from 'react';
import {RiFacebookFill} from 'react-icons/ri';
import {IoLogoTwitter} from 'react-icons/io5';
import cli from './img/stripe-climate-badge.png';
import './Footer.scss';

function Footer() {
  return (
    <>
    <div className='footer'> 
     <div className='container mb-3 mt-3'>
       <a href="#">HOME</a>
       <a href="#">PRIVACY</a>
       <a href="#">CONTACT</a>
       <a href="#">SIMPLE PAGE</a>
     </div>
     <div className="footer_social mb-3"> 
         <a href="https://www.facebook.com/pomofocus" target="_blank" rel="noopener"><RiFacebookFill className='social'/></a>
         <a href="https://twitter.com/pomofocus" target="_blank" rel="noopener"><IoLogoTwitter className='social'/></a>
         <a href="https://climate.stripe.com/kfwPBZ" target="_blank" rel="noopener"><img src={cli} alt='brnma'/></a>
    </div>
    <div className="mb-3">
        Made with {'<3'} by <a className="yuya" href="https://uzu.works" target="_blank" rel="noopener">Yuya Uzu</a>
    </div>
    <div className='footer__allrights mb-3'>©Pomofocus 2021. All Rights Reserved.</div>
    </div>
    </>
  )
}

export default Footer;