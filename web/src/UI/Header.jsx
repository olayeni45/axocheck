import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./css/Header.module.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand href="#home" className={styles.image}>
          <img
            src="https://axocheck.com/img/axologo.00b8316f.svg"
            alt="Axocheck Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/" className={styles.text}>
              Home
            </Nav.Link>
            <Nav.Link href="/professional" className={styles.text}>
              Professional
            </Nav.Link>
            <Nav.Link href="/support" className={styles.text}>
              Support
            </Nav.Link>
            <Nav.Link href="/signup" className={styles.text}>
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
