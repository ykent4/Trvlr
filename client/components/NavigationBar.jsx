import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

import style from './styles/navbar.scss';

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'user',
    }

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user !== null) {
      this.setState({ username: nextProps.user.username });
    }
  }

  render() {

    return (
      <Navbar className={style.navbar} inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home" className={style.brand_name}>TRVLR</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight className={style.username}>
          <NavDropdown eventKey={3} title={this.state.username.toUpperCase()} id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Memories</MenuItem>
            <MenuItem eventKey={3.2}>Wish List</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  };
}

export default NavigationBar;