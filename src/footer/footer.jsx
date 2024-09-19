import React from 'react'
import './footer.css'
import youtube from '../youtube.jpg'
import insta from '../insta.jpg'
import face from '../facebook.jpg'
import tweeter from '../tweeter.jpg'
import pin from '../pin.jpg'
import firebee from '../firebee.jpg'
function Footer() {
  return (
    <div className='footer_cont'>
      <div className='upper_panel'> 
      
      <div className='upper_first'>

<div className='item'>About</div>
<div className='item'>Support</div>
<div className='item'>Find us On</div>
      </div>
    

      <div className='upper_first'>

      <div className='item'>home</div>
{/* <div className='item'>activate</div> */}
{/* <div className='lower'>Find us On</div> */}
<div className='item'>activate</div>
      <div className='lower'>
<img src={youtube}/>
<img src={face}/>
<img src={insta}/>
<img src={tweeter}/>
<img src={pin}/>
      </div>
      
      
      </div>
     
      <div className='upper_third'>

      <div className='it'>Product</div>
<div className='itt'>Login</div>


      </div>

      </div>

      
      <div className='lower_panel'>

      <div className='lower_left'>
            <div className='title'>
      <img src={firebee} alt="" />
      <div className='ll'>firebee</div> 
            </div>
            <div className='line'>Copyright © 2020 Firebee Technologies, Inc. All rights reserved.</div>
            <div className='line'>The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</div>
      </div>
<div className='lower_right'>

Privacy Policy Terms of Service
</div>

      </div>
      <div className=''></div>
    </div>
  )
}

export default Footer
