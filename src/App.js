import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from './views/login';
import Register from './views/register';

function App() {
  return (
    <div className="App">
      <h1>Proyecto Final</h1>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/> 
      </Routes> 
    </div>
  );
}

export default App;
