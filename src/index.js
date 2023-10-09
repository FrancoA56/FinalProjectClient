import React from 'react';
import ReactDOM from 'react-dom';
import './styles/input.css';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
  );
  

  // ---------Dominio Loguin Auth0---------------
  // import { Auth0Provider } from "@auth0/auth0-react";
  // <Auth0Provider 
  //   domain='codecrafted-templates.us.auth0.com' 
  //   clientId='qhQRe9uouJwbhHJCIbkgS00Huca7jbmC' 
  //   redirectUri={window.location.origin}>  
  // </Auth0Provider>
