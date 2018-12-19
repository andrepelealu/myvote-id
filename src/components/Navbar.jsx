import React from 'react';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

import { Link } from 'react-router-dom';
import './Navbar.css';
import { Affix} from 'antd';





export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Affix>
        <Navbar color="light" light expand="md">
          <NavbarBrand><img height="30px" src="/images/logomyvote.png" /></NavbarBrand>
          {/* <NavbarBrand tag={Link} to="/" className="Brand"> My Vote ID</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/vote">Vote</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  tag={Link} to="/addcandidate" >Add Candidate</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  tag={Link} to="/transaction" >Transaction</NavLink>
              </NavItem>
              <NavItem>
                <Button outline color="primary" tag={Link} to="/login">Login/Signup</Button>{' '}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </Affix>
      </div>
    );
  }
}