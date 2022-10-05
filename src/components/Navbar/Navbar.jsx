import React, { useState } from 'react'
import Filter from '../../Reusable/Filter/Filter';
import Search from '../../Reusable/Search/Search';
import './Navbar.css';
const Navbar = ({hc2}) => {
  const f1 = [{id:1,name:"hoodie"},{id:2,name:"shirt"}];
  const f2 = [{id:1,name:"1"},{id:2,name:"2"}];
  const handleChange = (type,value)=>{
    
    hc2(type,value);
  }
  return (
    <div className='navbar'>
        <div className="filter-container">
            <Filter placeHolder={'type'} data={f1} handleChange={(type, value)=>{handleChange(type,value)}}/>
            <Filter placeHolder={'size'} data={f2} handleChange={(type,value)=>{handleChange(type,value)}}/>
        </div>
        <div className="search">
            <Search/>
            
        </div>
    </div>
  )
}

export default Navbar