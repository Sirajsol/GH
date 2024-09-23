import React, { useState } from 'react'
import topimg from '../bf.jpg'
import Menu from '../menu/menu'
import SingleItem from '../singleitem/SingleItem'
import './wholePage.css'
import MoneyBack from '../moneyBack/moneyBack'
import Signals from '../signals/signals'
import WhatDo from '../whatDo/whatDo'
import Box from '../box/box'
import Quest from '../quset/quest'
import Footer from '../footer/footer'
import MobileMenu from '../mobilemenu/mobilemenu'
import Point from '../point/point'
import fire from '../fire.gif'
import firebee from '../firebeee.png'

function WholePage() {
  const[x,setX]=useState(0);
  const[y,setY]=useState(0);
 
   
  
  return (


    
    <div  className='whole'
    
    onMouseMove={(e)=>{
      setX(e.pageX)
      setY(e.pageY)
            }}>
      <img src={topimg} alt='no image'/>
      {/* <Point/> */}
      <div 
    onMouseMove={(e)=>{
      // setX(e.screenX)
      // setY(e.screenY)
            }}
    
        className='point_whole'>
      <div className='mitem'
   style={{position: 'absolute',left: x , top: y-10}}
      >
     
       <div className='imgcon'>
        <img src={fire}/>
        <img src={firebee}/>
       
        </div>
       
      </div>
    </div>
      <MobileMenu/>
      <Menu/>
      {/* <Point/> */}
      <SingleItem/>
      <MoneyBack/>
      <Signals/>
      <WhatDo/>
      <Box/>
      <Quest/>
      <Footer/>
    </div>
  )
}

export default WholePage
