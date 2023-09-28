import './App.css';
import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./views/shoppingCart";
import Home from './components/Home/Home'
import Cart from '../src/views/cart.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/shop" element={<ShoppingCart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
