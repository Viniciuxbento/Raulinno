import React from 'react'
//assets
import "../assets/css/Body.css"
//components
import QuemSomos from './QuemSomos'
import Portifolio from './Portifolio'

const Body = () => {
  return (
    <div className='body'>
        <Portifolio />
        {/*<QuemSomos/>*/}
    </div>
  )
}

export default Body