import React, { Component } from 'react'
import { Navbar, NavItem  } from 'react-materialize'

import './Navbar.css'

export default class NavbarResume extends Component {
  render() {
    return (
      <Navbar id="nav-resume" right>
        <NavItem href="#/">HOME</NavItem>
        <NavItem href="#/about-me">ABOUT ME</NavItem>
        <NavItem href="#/portfolio">PORTFOLIO</NavItem>
        <NavItem onClick={() => window.scrollTo(0,document.querySelector("body").scrollHeight)}>CONTACT</NavItem>
      </Navbar>
    )
  }
}
