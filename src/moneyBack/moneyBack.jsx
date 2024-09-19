import React from 'react'
import './moneyBack.css'
import money from '../mony.png'
function MoneyBack() {
  return (
    <div  className='whole_money_Cont'>
<div className='mmg'>
    <img src={money} alt='no image'/>
</div>

      <div className='money_txt'>
        <div className='title'>30 Day Money Back Guarantee</div>
        <div className='desc'>At Firebee we believe in building quality products that actually work. Firebee and its partners have invested over $85 million in research and development to create the highest quality wearable for customers to enjoy. If for any reason if you are not satisfied with your Firebee headband we will happily refund your purchase.  </div>
      </div>

    </div>
  )
}

export default MoneyBack
