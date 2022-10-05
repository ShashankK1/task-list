import React, { useContext, useEffect, useState } from 'react'
import RowCard from '../../Reusable/RowCard/RowCard'
import './Body.css'
import data from '../../Assets/data/data.js';
import CartCard from '../../Reusable/CartCard/CartCard';
const Body = ({ filter, dataHandle }) => {
  const [filters, setFilters] = useState({ type: '', size: '' });
  const [products, setProducts] = useState(data);
  const [addProd, setAddProd] = useState([]);
  const handleChange = (op, id) => {
    if (op === 'sub') {
      setAddProd(addProd => {
        // let newProd = [];
        // for(let i=0;i<prevProducts.length; i++){
        //   if(prevProducts[i].id !== id){
        //     newProd.push(prevProducts[i]);
        //   }
        // }
        // console.log(newProd);

        return [];
      });
    }
    else if (op === 'add') {
      setAddProd(prevProducts => {
        for (let i = 0; i < products.length; i++) {
          if (products[i].id === id) {
            prevProducts.push(products[i]);
          }
        }
        return prevProducts;
      });
    }
  }
  useEffect(() => {
    
    setFilters(prevFilters => {
      const f = { ...prevFilters, [filter.type]: filter.value };
      setAddProd([]);
      setShow(false);
      setProducts(prevProducts => {

        let newProducts = [...data];
        if (f['type'] !== '') {
          newProducts = newProducts.filter(product => product.type === f['type']);
        }

        if (f['size'] !== '') {
          newProducts = newProducts.filter(product => product.size === f['size']);
        }

        return newProducts;

      })
      return f;
    });





  }, [filter])
  const Cards = () => {
    return (products.map(({ image, name, color, stock, price, type, size, id }, i) => {
      return (
        <RowCard key={i} image={image} name={name}
          color={color} stock={stock} price={price} id={id}
          handleChange={(op, id) => { handleChange(op, id) }} />)
    }));
  }
  const [show, setShow] = useState(false);
  const addTocart = () => {
    setShow(true);
  }


  // let iniTotal = 0;
  // for (const x of addProd) {
  //   iniTotal += parseInt(x.price)
  // }


  const [total, setTotal] = useState(0)
  const qChange = (e) => {
    //setTotal(prevTotal=>prevTotal+e)
  }
  const CartProds = () => {
    return (addProd.map((prod) => {
      return (

        <CartCard prod={prod} key={prod.id} qChange={(e) => { qChange(e) }} />
      )
    }))
  }
  const [ty, setTy] = useState("")
  return (
    <div className='body'>
      <Cards />

      <button className='add-btn' onClick={() => { addTocart() }}>Add to Cart</button>
      {show && (

        <div className="summary">
          <div className="cart-header">
            <div className="r">Product</div>
            <div className="r">Price</div>
            <div className="r">Quantity</div>
            <div className="r">Subtotal</div>
          </div>
          <CartProds />

        </div>
      )}
      {show && (

        <div className="total">
          <button onClick={()=>{setTy('Thank You for buying')}}>Buy</button>
          <p>{ty}</p>
        </div>
      )}




    </div>
  )
}

export default Body