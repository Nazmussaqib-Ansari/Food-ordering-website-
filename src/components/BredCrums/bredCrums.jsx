import React from 'react'
import "./BredCrums.css"
import arrow from "../../assets/arrow.png"
const BredCrums = (props) => {
    const {product}=props;  // jo hamare product h wo props se aa raha 
  return (
    <div className='bredCrums'>
         Home <img src={arrow} alt="icon" height="10px"/> 
         Shop <img src={arrow} alt="icon" height="10px"/>{product.category}
         <img src={arrow} alt="icon" height="10px"/> {product.name}
      
    </div>
   
  )
}

export default BredCrums;