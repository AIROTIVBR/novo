import React from 'react'; 
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './assets/imgs/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css';


function Navb () {
  return (
    <Navbar expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand href="https://www.linkedin.com/in/vitória-amorim-b25b6a23a/" target='blank'>
            <img
              src={Logo}
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='tog'/>
        <Navbar.Collapse id="basic-navbar-nav" className='drop'>
          <Nav className="ms-auto tog">
            <Nav.Link >
                <Link to="/" className='nav-link'>Sobre</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/Projetos" className='nav-link'>Projetos</Link>
            </Nav.Link>
            <Nav.Link  disabled>
              <Link to="/Certificados" className='nav-link'>Certificados</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navb;