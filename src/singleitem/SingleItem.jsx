import React from 'react'
import ItemInfo from '../itemInfo/itemInfo'
import Carousal from '../caraousel/Carousal'
import './SingleItem.css'
function SingleItem() {
  return (
    <div className='single_whole'>
        <Carousal/>
      <ItemInfo/>
    </div>
  )
}

export default SingleItem
