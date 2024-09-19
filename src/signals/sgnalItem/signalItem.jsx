import React from 'react'
import './signalItem.css'
function SignalItem({data,mg}) {
  return (
    <div className='signsl_item_container'>
    
      <div className='img_cont'>
      <img src={mg}/>

      </div>
      <div className='text'>
{data}
      </div>
    </div>
  )
}

export default SignalItem
