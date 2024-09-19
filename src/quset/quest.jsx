import React, { useState } from 'react'
import './quest.css'
import QuestItem from '../questItem/questItem'
function Quest() {
    const[expand,setExpand]=useState(false)
  return (
    <div className='quest_cont'>
        <div className='quest_internal_cont'>
<div className='title'> Frequently Asked Questions</div>

<QuestItem title={'Is Firebee Safe?'} data={` Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection).
     Firebee is 3000x less powerful than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use.
     The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety. 
   `} />
        

<QuestItem title={'  How Does Firebee Work?'} data={` `} />
<QuestItem title={' Will Firebee Fit On My Head?'} data={` `} />
<QuestItem title={'   What if i want the signal to stop?'} data={` `} />
<QuestItem title={'  How Does Firebee Work?'} data={` `} />
    
   
        </div>
   
    </div>
  )
}

export default Quest
