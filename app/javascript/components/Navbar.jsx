import React, { useState } from 'react';
import axios from 'axios';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  Container,
} from 'reactstrap';

const NavigationBar = (props) => {

  const { user } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">turntable</NavbarBrand>
        <NavbarToggler onClick={toggle} />

          {user ? 
                <Nav className="ml-auto" navbar> 
                <NavLink href='/recipes/'>
                        Add Recipe
                      </NavLink>
                  <NavLink
                    href='/users/sign_out' data-method="delete" rel="nofollow">
                  Logout
                  </NavLink>
                </Nav>: 
            <Nav className="ml-auto" navbar>
              <NavLink href="/users/sign_up">Sign Up</NavLink>
              <NavLink href="/users/sign_in">Log In</NavLink>
            </Nav>
            }
      </Navbar>
    </div>
  );
}


export default NavigationBar;