import React from 'react';
import {Modal,Form} from 'reactstrap';
import {FaRegCheckCircle} from 'react-icons/fa';
import {IoCloseSharp} from 'react-icons/io5';
import {IoIosRocket} from 'react-icons/io';

import './Switch.scss';
function SwitchModal({on,toggleM,setOn}) {
  return (
<Modal title="Xodim qo'shish" isOpen={on} toggle={toggleM} className="text-dark">
 <div className='m-3'>
     <div className='premium-plan'>
         <h3>Premium Plan</h3>
         <IoCloseSharp onClick={() =>setOn(false)} className='close'/>
     </div>
    <div className='you-can'>You can...</div>
    <div>
     <div><FaRegCheckCircle className="check"/>Add projects</div>
     <div><FaRegCheckCircle className="check"/>See yearly report</div>
     <div><FaRegCheckCircle className="check"/>Change notification setting</div>
     <div><FaRegCheckCircle className="check"/>Save more than 3 templates</div>
     <div><FaRegCheckCircle className="check"/>Enable dark mode</div>
     <div><FaRegCheckCircle className="check"/>Download report</div>
     <div><FaRegCheckCircle className="check"/>No ads</div>
     <div><FaRegCheckCircle className="check"/>... and all the future updates</div>
    </div>
    <div className='mt-3 mb-3 plan'>Select plan</div>
    <div className='price'>
      <div className='price-wrap'>
        <p> MONTHLY</p>
        <h3>$1.99</h3>
        <p>/ month</p>
      </div>
      <div className='price-wrap'>
        <p> YEARLY</p>
        <h3>$12</h3>
        <p>/ year</p>
      </div>
      <div className='price-wrap'>
        <p>LIFETIME</p>
        <h3>$36</h3>
        <p>/ lifetime</p>
      </div>
    </div>
    <div className='go-premium'><button><IoIosRocket className='IoIosRocket'/>Go Premium - 7 days free</button></div>
    <div className='price-footer'>
        <div className='p-2'>
<div>        * After the 7 days of free trial, you will automatically be transitioned to the paying subscription.</div>
<div>* The subscription will be auto-renewed until you unsubscribe.</div>
<div>* You will be notified a week prior to the renewal date.</div>
        </div>
    </div>
 </div>
</Modal>
  )
}

export default SwitchModal;

