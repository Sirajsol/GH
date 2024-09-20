import React from 'react'
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
function WholePage() {
  return (
    <div  className='whole'>
      <img src={topimg} alt='no image'/>
      <MobileMenu/>
      <Menu/>
     
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
