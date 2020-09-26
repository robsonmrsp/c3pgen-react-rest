import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Avatar2 } from './Avatar';
import logoDark from '@/assets/img/logo-dark.png';

const TopNavbar = () => (
  <Nav className="navbar navbar-expand-xl navbar-dark fixed-top hk-navbar">
    <a
      id="navbar_toggle_btn"
      className="navbar-toggle-btn nav-link-hover"
      href="javascript:void(0);"
    >
      <i className="ion ion-ios-menu" />
    </a>
    <a className="navbar-brand" href="dashboard1.html">
      <img
        className="brand-img d-inline-block"
        src={logoDark}
        alt="brand"
      />
    </a>
    <ul className="navbar-nav hk-navbar-content">
      <Nav.Item>
        <a
          id="settings_toggle_btn"
          className="nav-link nav-link-hover"
          href="javascript:void(0);"
        >
          <i className="ion ion-ios-settings" />
        </a>
      </Nav.Item>

      <NavDropdown
        className="nav-item dropdown-authentication"
        title={
          (
            <Avatar2 />
          )
        }
      >
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </ul>
  </Nav>
);

export default TopNavbar;
