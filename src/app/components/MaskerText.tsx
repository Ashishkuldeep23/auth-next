

import React from 'react'

const MaskerText = ({ text = "Effect" } : {text : string}) => {
  return (
    <div>

        {
            text.trim().split("").map((ele , i)=>(
                <span className='single_text' key={i}>{ele}</span>
            ))
        }

    </div>
  )
}

export default MaskerText

