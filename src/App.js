import React, {  useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/body/Body';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
  const [filter, setFilter] = useState({});
  const hc2 = (type,value)=>{
    setFilter({type:type,value:value})
  }
  const cartrod = [];
  return (
 
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<>
          <Navbar hc2={((type,value)=>{hc2(type,value)})}/>
          <Header/>
          <Body filter={filter} />
          </>}/>
          <Route
          path='/summary'
          element={<></>}
          />
        </Routes>
      </Router>
    </div>

  )
}

export default App