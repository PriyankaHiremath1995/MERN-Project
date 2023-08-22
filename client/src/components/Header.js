import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const {loading, error, userInfo} = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/ ")
  }

  return (
    <Navbar bg = "primary" expand="lg" variant="dark">
        {userInfo? 
        (<Container><Navbar.Brand href="/">View-Messanger</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto"></Nav>
          <Nav>
            <Nav.Link href="/message">My Messages</Nav.Link>
            <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {logoutHandler()}}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse></Container>) : 
        (<Container><Nav.Link href="/login">Login</Nav.Link></Container>)}
    </Navbar>
  );
}

export default Header;