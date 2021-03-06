import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider} from '@auth0/auth0-react'
import App from './App';
import "bootswatch/dist/morph/bootstrap.min.css";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={ domain }
    redirectUri={ window.location.origin }
    clientId={ clientId }>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
