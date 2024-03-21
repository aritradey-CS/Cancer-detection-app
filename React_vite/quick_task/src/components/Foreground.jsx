import React from 'react'
import Card from './Card'

function Foreground() {
  return (
    <div>
    <div className='fixed z-[3] top-0 left-0 w-full h-full'></div>
      <Card/>
    </div>
  )
}

export default Foreground
