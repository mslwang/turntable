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

  const logIn = () => {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    axios.get('/users/sign_in', { headers: {
      'X-CSRF-Token': csrf,
  }});
  }

  const logOut = async () => {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const res = await axios.delete('/users/sign_out', { headers: {
      'X-CSRF-Token': csrf,
  }}).catch(err => {
      console.log(err)
    });
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">turntable</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          {user ? <Container>

                <Nav className="ml-auto" navbar> 
                <NavLink href='/recipes/'>
                        Add Recipe
                      </NavLink>
                  <NavLink
                    href='/users/sign_out' data-method="delete" rel="nofollow">
                  Logout
                  </NavLink>
                </Nav>
                </Container>: 
                <Container>
            <Nav>
              <NavLink href="/users/sign_up">Sign Up</NavLink>
              <NavLink href="/users/sign_in">Log In</NavLink>
            </Nav>
            </Container>
            }
        </Collapse>
      </Navbar>
    </div>
  );
}


export default NavigationBar;