import React from 'react'
import './whatDo.css'
import wom from '../wom.png'
import ItemWithMark from '../itemWithMark/itemWithMark'
function WhatDo() {
  return (
    <div className='what-whole_cont'>
      <div className='title'>What will Firebee do for me?</div>
<div className='desc'> Firebee will help you gently nudge yourself into a different mental state</div>
<div className='img_and_items'>
<div className='img'>
    <img src={wom} alt="" />
</div>

<div className='itms'>   
<ItemWithMark data={'Can’t sleep? Turn on the deep sleep signal '}/>
<ItemWithMark data={'Feeling tired? Turn on the alert signal '}/>
<ItemWithMark data={'Feeling anxious? Turn on the calm signal '}/>
<ItemWithMark data={'Feeling unproductive? Turn on the focus signal '}/>
<ItemWithMark data={'Feeling blue? Turn on the happy signal '}/>
</div>
</div>
    </div>
  )
}

export default WhatDo
