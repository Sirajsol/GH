import React, { useState } from 'react'
import './point.css'
import fire from '../fire.gif'
import firebee from '../firebeee.png'
function Point() {
  const[x,setX]=useState(0);
  const[y,setY]=useState(0);
  return (
    <div 
    onMouseMove={(e)=>{
      setX(e.clientX)
      setY(e.clientY)
            }}
    
        className='point_whole'>
      <div className='mitem'
   style={{marginLeft: x , marginTop: y}}
 
   
      >
        {/* {(x,y)} */}
       <div className='imgcon'>
        <img src={fire}/>
        <img src={firebee}/>
        </div>
      </div>
    </div>
  )
}

export default Point
