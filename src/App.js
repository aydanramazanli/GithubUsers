import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Error from './pages/Error'
import Login from './pages/Login'
import Main from './pages/Main'


function App() {
  return (
   <Router>
     <div className="bg-slate-100">
     <Switch>
       <Route path="/" exact>
         <Main/>
       </Route>
       <Route path="/login">
         <Login/>
       </Route>
       <Route path="*">
         <Error/>
       </Route>
     </Switch>
     </div>
   </Router>
  );
}

export default App;
