import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './containers/HomePage';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateLink from './containers/CreateLink';
import Linklist from './containers/LinkList';
import * as serviceWorker from "./serviceWorker";



ReactDOM.render(
  <React.StrictMode>
    <HomePage></HomePage>
    <Router>
      <Switch>
        <Route exact path="/" component={Linklist}></Route> 
        <Route path="/create" component={CreateLink}></Route>
        <Route path="*" component={Linklist} /> 
      </Switch>
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
