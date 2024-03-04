import React from 'react'
//assets
import "../assets/css/Body.css"
//components
import QuemSomos from './QuemSomos'

import Carrossel from './Carrossel'

const Body = () => {
  return (
    <div className='body'>
      <div className='bodyContainerMain'>
      <Carrossel />
      
      <QuemSomos/>
      </div>
    </div>
  )
}

export default Body