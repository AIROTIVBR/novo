import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './assets/imgs/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css';


class Navb extends React.Component {
    
  render() {
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
            <Nav.Link href="/" className='nav-link'>
                Sobre
            </Nav.Link>
            <Nav.Link href='/Projetos' className='nav-link'>
               Projetos
            </Nav.Link>
            <Nav.Link href ="/Certificados" className='nav-link' disabled>
                Certificados
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
}

export default Navb;