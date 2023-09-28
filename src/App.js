import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from './views/login';
import Register from './views/register';
import ShoppingCart from "./views/shoppingCart";
import Home from './components/Home/Home'
import Cart from '../views/cart.jsx'

function App() {
  return (
    <div className="App">

      <h1>Proyecto Final</h1>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/> 
        <Route path="/shop" element={<ShoppingCart/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

    </div>
  );
}

export default App;
