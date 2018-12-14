import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavHeader from './components/NavHeader.js';
import HomePage from './components/HomePage.js';
import Footer from './components/Footer.js';
import Services from './components/Services.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page-container">          
          <NavHeader/>
          <Switch>
            <Route path="/" component={HomePage} exact/>  
            <Route path="/services" component={Services}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;