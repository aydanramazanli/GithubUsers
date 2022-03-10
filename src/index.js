import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GithubProvider} from './context/Context'
import { Auth0Provider } from "@auth0/auth0-react";
//7kBEYYuGbNf2aH7XtYYRaMTAqcLNQzU_ZxUWUcFkFxIf4qh07agJmU3pEm8kJBOv


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-ynu3iqlb.us.auth0.com"
     clientId="N1325Pk4pupnfqQWPtYvgZAPUpIJn9zA"
     redirectUri={window.location.origin}>
    <GithubProvider>
    <App />
    </GithubProvider>
    </Auth0Provider>
  
  
  </React.StrictMode>,
  document.getElementById('root')
);

