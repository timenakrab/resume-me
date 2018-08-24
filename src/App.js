import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavbarResume from './components/Navbar/NavbarResume';
import IndexPage from './components/IndexPage/IndexPage'
import AboutMe from './components/AboutMe/AboutMe'
import Portfolio from './components/Portfolio/Portfolio';

import Footer from './components/Footer/FooterPage'

class App extends Component {
  render() {
    return (
        <div className="body-page">
          <Router>
          <main>
            <NavbarResume/>
            <Route exact path="/" component={IndexPage} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
          </main>
          </Router>
          <Footer/>
        </div>
    );
  }
}

export default App;
