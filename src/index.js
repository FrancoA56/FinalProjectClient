import React from 'react';
import ReactDOM from 'react-dom';
import './styles/input.css';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
  );
  

  
/* ---------Dominio Loguin Auth0---------------
  <Auth0Provider 
    domain='dev-iyjkcsm7sd2cg87z.us.auth0.com' 
    clientId='BWHyC3JmjNHZnpsVG5t3ZsYg8fQrPqH3' 
    redirectUri={window.location.origin}>
  </Auth0Provider>
*/