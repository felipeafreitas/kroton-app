import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function HeaderMenu() {
  return (
    <Navbar bg="light" bg="white" className="shadow-sm rounded">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#home">
        <i class="fab fa-whatsapp"></i> Fale Conosco
      </Navbar.Brand>
    </Navbar>
  );
}

export default HeaderMenu;
