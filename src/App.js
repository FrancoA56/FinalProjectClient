import './App.css';
import { Routes, Route } from "react-router-dom";
import ShoppingCart from './components/shoppingCart/shoppingCart';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/shop" element={<ShoppingCart />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
