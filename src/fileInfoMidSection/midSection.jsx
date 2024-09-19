import React from 'react'
import ItemWithMark from '../itemWithMark/itemWithMark'
import './midSection.css'
import arrow from '../arrow.jpg'
import affirm from '../affirn.jpg' ;
import american from '../american.jpg';
import master from '../master.jpg';
import visa from '../visa.jpg';
import maestro from '../maestro.jpg';
import paypal from '../paypal.jpg';
function MidSection() {
  return (
    <div  className='cont'>
    <div>

        <div className='whole_mid_section'>
<div className='ttl_and_price'>
    <div className='ttl'>Firebee Starter Kit</div>

    <div className='pr'>

<div className='prc_dashed'>
    <div>$999.00</div>


<div className='dash'> 
            <svg width="96" height="22" viewBox="0 0 96 22"  xmlns="http://www.w3.org/2000/svg" >
<path d="M1 21L95 1" stroke="#E41E31" stroke-width="2" fill='black'/>

</svg>

            </div>
</div>

<div className='prc'>$379.00</div>
    </div>
</div>


<div className='blueradius'>MOST POPULAR KIT</div>



<ItemWithMark data={'Access to 7 signals (and future signal releases)'} />
<ItemWithMark data={'Firebee Headband '} />
<ItemWithMark data={'$19/month membership, first 2 months free '} />

<div className='parag'>
    <p>
    The starter kit is the most affordable way to get started with Firebee. 
    Pay $299 for the Firebee headband and access to the entire Firebee Signal Catalogue for
     only $19 a month. 
     
     <span> Membership can be cancelled anytime. No contracts. Satisfaction guaranteed.</span>
    </p>

</div>

        </div>
        


    </div>




    <div >

<div className='whole_mid_section'>
<div className='ttl_and_price'>
<div className='ttl'>Founder’s Kit</div>

<div className='pr'>



<div className='prc'>$799.00</div>
</div>
</div>

<ItemWithMark data={'Access to 7 signals (and future signal releases)'} />
<ItemWithMark data={'Firebee Headband '} />
<ItemWithMark data={'No Monthly Membership'} />

<div className='parag'>
<p>
The Founders kit allows you to get the Firebee headband 
and lifetime access to the entire Firebee Signal Catalogue for a one-time payment.
 The Founders is kit can be paid through Affirm allowing customers to make small payments of $73 a month.
</p>

</div>

</div>



</div>

<div className='green_rect'>

<img src={arrow}/>
</div>
<div className='pays'>
<img src={american}/>
<img src={affirm}/>
<img src={maestro}/>
<img src={visa}/>
<img src={master}/>
<img src={paypal}/>
</div>
    </div>
  )
}

export default MidSection
