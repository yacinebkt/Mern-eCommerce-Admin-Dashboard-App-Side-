import React from "react";
import { Navbar, Nav, Container, /*NavDropdown */} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {NavLink, Link} from "react-router-dom"
import { LogOut } from "../../actions/authentification.action";

// import styleSheet
import  "./style.css"


export default function Header(props) {

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  const logout = () => {
    dispatch(LogOut()) // don't work without ()
  }
  

  const LoggedInLinks = () => {

    return (
      <Nav>
      <li className="nav-item" >
      <NavLink className="nav-link" to= "/singin"> Sign In </NavLink>
      </li>
       <li className="nav-item" >
       <NavLink className="nav-link" to= "/singup"> Sign Up </NavLink>
       </li>

    </Nav>
    );
  }

  const LoggedOutLink = () => {

    return (
      <Nav>
      
       <li className="nav-item" >
       <span className="nav-link" onClick={logout} > Sign out </span>
       </li>

    </Nav>
    );
  }



  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" className="navbar">
      <Container fluid>
         {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */} 
         <Link to="/" className="navbar-brand"> Admin Dashboard </Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/*  <Nav.Link href="#features">Features</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
             */}
          </Nav>

          {auth.authenticate ? LoggedOutLink() : LoggedInLinks()}

          {/*

           <Nav>
            <li className="nav-item" >
            <NavLink className="nav-link" to= "/singin"> Sing In </NavLink>
            </li>
             <li className="nav-item" >
             <NavLink className="nav-link" to= "/singup"> Sing Up </NavLink>
             </li>

          </Nav>
           */}
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
