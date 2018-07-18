import React, { Component } from 'react'
// import { Navbar, NavItem  } from 'react-materialize'
import './Navbar.css'

export default class NavbarUpdateRecruit extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <nav id="nav-updaterecruit">
        <div className="nav-wrapper">
          <ul className="right">
            <li style={{color : "#000"}}>
              <span>{this.props.page} / 4</span>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
