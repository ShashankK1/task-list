import React, { useState } from 'react'
import './RowCard.css'
const RowCard = ({image, name, color, stock, price, handleChange, id}) => {
    const handle = (e)=>{
      
        if(e.target.checked){
            handleChange('add',e.target.name);
        }
        else{
            handleChange('sub',e.target.name);
        }
    }
  

    return (
        <div className='container' id={id}>
            <div className="image"><img src={image} alt='img' width={60}/></div>
            <div className="name">{name}</div>
            <div className="color">{color}</div>
            <div className="stock">{stock}</div>
            <div className="price">{price}</div>
            <div className="buy">
                <input type='checkbox' name={id} onChange={(e)=>{handle(e)}}/>
            </div>
        </div>
    )
}

export default RowCard