import React, { Component } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="Engo">
        <Navbar bg="red" variant="dark" sticky="top" className="bV">
          <Navbar.Brand
            style={{ color: "black" }}
            href="#home"
            className="TitreOfficiel"
          >
            E-COMMERCE
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">
              <a className="HeaderLink">Ajouter un produit</a>
            </Link>
            <Link to="/ConsulterLesProduits">
              <a className="HeaderLink">Consulter les produits</a>
            </Link>
            <Link to="/ListeDesCommandes">
              <a className="HeaderLink">Liste des commandes</a>
            </Link>
          </Nav>
          <Form inline>
            
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Header;
