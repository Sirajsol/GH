import React from 'react'
import './box.css'
import gq from '../gq.jpg'
import guard from '../guard.jpg'
import cnn from '../cnn.jpg'
import box from '../box.png'
import wall from '../wall.jpg'
import mashable from '../mashable.jpg'
import times from '../times.jpg'
import ItemWithMark from '../itemWithMark/itemWithMark'
function Box() {
  return (
    <div className='box_cont'>
        <div className='txt'>What’s in the box?</div>
      <div className='imgg'>
        <img src={box}/>
      </div>
      <div className='featur'></div>
      <div className='brands'>
        <img src={gq} alt="" />
        <img src={guard} alt="" />
        <img src={cnn} alt="" />
        <img src={wall} alt="" />
        <img src={mashable} alt="" />
        <img src={times} alt="" />
      </div>
      <div className='items'>
        <ItemWithMark data={'1 Firebeeheadband '} />
        <ItemWithMark data={'1 Charging cable'} />
        <ItemWithMark data={'1 User manual'} />
      </div>
    </div>
  )
}

export default Box
