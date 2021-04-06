import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function HeaderMenu() {
  return (
    <Navbar bg="light" className="shadow-sm rounded">
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
