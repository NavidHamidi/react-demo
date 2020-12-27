import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
   <Auth0Provider 
      domain="ratp-dev1.eu.auth0.com"
      clientId="FSTO0RvHIjBo72fDqAWiWNWcuiYZxiIA"
      redirectUri={window.location.origin}
    ><App/>
  </Auth0Provider>,
  document.getElementById('root')
);


