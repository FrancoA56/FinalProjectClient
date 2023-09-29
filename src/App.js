import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./views/shoppingCart";
import Home from './components/Home/Home'
import Cart from './views/cart.jsx'
import Login from './views/login';
import Register from './views/register';

function App() {
  return (
    <div className="App">
      <h1>Proyecto Final</h1>
      <Routes>
        <Route path="/shop" element={<ShoppingCart/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/> 
      </Routes> 
    </div>
  );
}

export default App;
