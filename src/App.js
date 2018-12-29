import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import Main from './components/main';
import Logo from './media/LOGO-VEGGIE-SITTER.png';
import {Link} from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
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
        <Navbar color="transparent" light expand="md">
          <NavbarBrand href="/"><img  src={Logo} style={{height: '30%', width: '30%'}} alt="VeggieSitter" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact/">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/#">Follow</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/#">Subscribe</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Main />
        
      </div>
    );
  }
}