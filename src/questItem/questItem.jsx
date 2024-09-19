import React from 'react'
import './questItem.css'
import { useState } from 'react'
function QuestItem({title,data}) {
    const[expand,setExpand]=useState(false)
  return (
    <div>
      

      <div className='tttl'>
            <div className='txt'>
            {title}
            </div>
            <div className='sign'
            onClick={()=>{
                setExpand(prev=>!prev)
            }}
            >{`${expand?'-':'+'}`}</div>
           </div>  
    <div className={`${expand?'expand':'shrink'}`}>

    {data}
    </div>
    </div>
  )
}

export default QuestItem
