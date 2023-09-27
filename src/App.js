import './App.css';
import { Routes, Route } from "react-router-dom";
import ShoppingCart from './components/shoppingCart/shoppingCart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/shop" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
