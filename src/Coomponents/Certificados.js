import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css';
import Navb from './NavBar.js';

function Certificados() {
    return (
      <>
    <Navb />
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
    </Card>
    </>
    );
  }

export default Certificados;
