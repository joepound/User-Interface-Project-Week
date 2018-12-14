import React from 'react';
import { NavLink } from "react-router-dom";

class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false
    };
  }

  openMenu() {
    this.setState({isOpenMenu: true});
  }

  closeMenu() {
    this.setState({isOpenMenu: false});
  }

  render() {
    return (
      <header className="page-header">
        <div className="nav__top-bar">
          <h1 className="nav__top-bar__logo-header">S&amp;J</h1>
          <input className="nav__top-bar__menu-button" type="image" src="img/nav-hamburger.png" alt="Show Menu" onClick={() => this.openMenu()}/> 
        </div>
        <nav className={this.state.isOpenMenu ? "nav__menu" : "nav__menu nav__menu--closed"}>
          <h2 className="outline-guide">Navigation Menu</h2>
          <div className="nav__menu__top-area">
            <span className="nav__menu__top-area__logo-header">S&amp;J</span>
            <input className="nav__menu__top-area__close-button" type="image" src="img/nav-hamburger-close.png" alt="Close Menu" onClick={() => this.closeMenu()}/>
          </div>
          <div className="nav__menu__links">
            <NavLink to="/" className="nav__menu__links__item--selected">Home</NavLink>
            <NavLink to="/services" className="nav__menu__links__item">Services</NavLink>
            <NavLink to="/projects" className="nav__menu__links__item">Our Projects</NavLink>
            <NavLink to="/about" className="nav__menu__links__item">About Us</NavLink>
            <NavLink to="/contact" className="nav__menu__links__item">Contact</NavLink>
          </div>
        </nav>
        <div className="jumbotron-area">
          <img className="desktop-image" src="img/home/home-jumbotron.png" alt="" />
          <img className="mobile-image" src="img/home/home-mobile-jumbotron.png" alt="" />
          <span className="jumbotron-header home">Integrity,<br />Excellence,<br />Progress.</span>
        </div>
      </header>
    );
  }
}

export default NavHeader;