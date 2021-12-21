import React, { Component} from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import navbar from './components/navbar';
import productlist from './components/productlist';
import defaults from './components/defaults';
import model from './components/model';
import details from './components/details';

class App extends Component {
  render(){
  return (
    <React.Fragment>
    <navbar>
      <routes>
        <Route exact path = "/" element = {<productlist/>} />
        <Route path = "/details" element = {<details/>} />
        <Route path = "/cart" element = {<cart/>} />
        <Route element = {<default/>} />
      </routes>
    </navbar>
    </React.Fragment>
  );
  }
}

export default App;
