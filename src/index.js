import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GithubProvider} from './context/Context'
import { Auth0Provider } from "@auth0/auth0-react";
// dev-ulb0zt0i.us.auth0.com   domain
// AnpismIGzOxk1nqHqPxjF6gtRfVK5iUh   client id
// YMNr6lIqM5TGFqvV6T1BcD1_BXwG5ysIvG61kb3pVHIg5ibPoZhVvvL29dsM9TSH  client secret

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-ulb0zt0i.us.auth0.com"
     clientId="AnpismIGzOxk1nqHqPxjF6gtRfVK5iUh"
     redirectUri={window.location.origin}>
    <GithubProvider>
    <App />
    </GithubProvider>
    </Auth0Provider>
  
  
  </React.StrictMode>,
  document.getElementById('root')
);

