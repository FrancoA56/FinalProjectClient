import React from "react";
import ReactDOM from "react-dom";
import "./styles/input.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-mlm15bkyigdspv74.us.auth0.com"
      clientId="6YyyYLEBppMNryIx7J2KZZNorGZxxgZZ"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);

/* ---------Dominio Loguin Auth0---------------
  <Auth0Provider 
    domain='dev-mlm15bkyigdspv74.us.auth0.com' 
    clientId='6YyyYLEBppMNryIx7J2KZZNorGZxxgZZ' 
    redirectUri={window.location.origin}>
  </Auth0Provider>
*/
