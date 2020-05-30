import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Map from "../Screens/Map.js";
import Footer from './Footer.js';

export default () => (
  <Router basename ={process.env.PUBLIC_URL}>
    <Footer/>
    <Route path="/map" component={Map} />
  </Router>
)