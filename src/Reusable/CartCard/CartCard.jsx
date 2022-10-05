import React, { useState } from 'react'
import './CartCard.css';
const CartCard = ({prod, qChange}) => {
    const [quantity, setQuantity] = useState(1);
    const changeQuantity = (status,sub)=>{
        if(status){
            setQuantity(quantity=>{
                qChange(sub)
                return quantity+1})
        }
        else{
            setQuantity(quantity=>{
                qChange(sub)
                return Math.max(quantity-1,0)})
        }

    }
    return (
        <div className="cart-prod" >
            <div className="product-img p">
                <img src={prod.image} width={40} alt="" /> {prod.name}
            </div>
            <div className="product-price p">{prod.price}</div>
            <div className="product-quantity p">
                <button onClick={()=>changeQuantity(false,prod.price*quantity)} >-</button>
                    {quantity}
                <button onClick={()=>changeQuantity(true,prod.price*quantity)}>+</button>
            </div>
            <div className="product-subtotal p">{prod.price*quantity}</div>
        </div>
    )
}

export default CartCard