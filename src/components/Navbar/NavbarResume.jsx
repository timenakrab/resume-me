import React, { Component } from 'react'
import { Navbar, NavItem  } from 'react-materialize'
// import {Link} from 'react-router-dom'

import './Navbar.css'

export default class NavbarResume extends Component {
  render() {
    return (
      <Navbar id="nav-resume" right>
        <NavItem href="#/">HOME</NavItem>
        <NavItem href="#/">About Me</NavItem>
        <NavItem href="#/">Portfolio</NavItem>
        <NavItem href="#/">Contact</NavItem>
      </Navbar>
    )
  }
}
