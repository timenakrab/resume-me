import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavbarResume from './components/Navbar/NavbarResume';
import IndexPage from './components/IndexPage/IndexPage'

import Footer from './components/Footer/FooterPage'

class App extends Component {
  render() {
    return (
        <div className="body-page">
          <Router>
          <main>
            <NavbarResume/>
            <Route exact path="/" component={IndexPage} />
            {/* <Route path="/form/:company/:job" component={CardId} />
            <Route path="/form-recruit" component={FormRecruit} />
            <Route path="/update-recruit" component={UpdateRecruit} /> */}

            {/* <Route path="/myproduct-detail/:id" component={MyProductDetail} /> */}
            {/* <Route component={NoMatch} /> */}
            
          </main>
          </Router>
          <Footer/>
        </div>
    );
  }
}

export default App;
