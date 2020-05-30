import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Map from "../Screens/Map.js";
import Footer from './Footer.js';

export default () => (
  <Router basename ='/'>
    <Footer/>
    <Route path="/map" component={Map} />
  </Router>
)