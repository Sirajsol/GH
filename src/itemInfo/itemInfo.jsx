import React from 'react'
import './itemInfo.css'
import TitleNReview from '../itemTitleAndReview/TitleNReview'
import MidSection from '../fileInfoMidSection/midSection'
function ItemInfo() {
  return (
    <div className='item_info_whole'>
     <TitleNReview/>
     <MidSection/>
    </div>
  )
}

export default ItemInfo
