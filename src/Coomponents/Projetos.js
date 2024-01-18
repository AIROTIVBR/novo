import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css';
import Navb from './NavBar.js';
import covid from './assets/imgs/casos todos anos.jpeg'; 
import trunfo from './assets/imgs/supertrunfo.png';
import todo from './assets/imgs/to_do_list.png';
import dash from './assets/imgs/dash.jpeg';
import base from './assets/imgs/conversor_de_bases_numericas.png';
import web from './assets/imgs/trabalho_de_dev_web.png';
import guess from './assets/imgs/guessing_game.png';
import yene from './assets/imgs/conversor_de_yene.png';
import game from './assets/imgs/gaming_curious_facts.png';
import sizes from './assets/imgs/conversor_de_medidas.png';
import san from './assets/imgs/login,jgh.png';


class Projetos extends React.Component {
    
  render() {
  return (
    <>
    <Navb />
    <Container>
    <Row>
      <Col xs lg="4">
        <Card className='card'>
        <Card.Img className='card-imgs' variant="top" src={dash} />
          <Card.Body className='details'>
            <Card.Title className='cardHeader'>
              <Link to="https://github.com/AIROTIVBR/thing-I-ve-been-learning" target='blank'>Projeto 11</Link>
            </Card.Title>
            <Card.Text className='cardText'>
              Diferentes usos da biblioteca Dash, fiz enquanto aprendia sobre.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs lg="4">
      <Card className='card'>
        <Card.Img className='card-imgs' variant="top" src={covid} />
          <Card.Body className='details'>
            <Card.Title className='cardHeader'>
              <Link to="https://github.com/AIROTIVBR/Big_Data_Project" target='blank'>Projeto 10</Link>
            </Card.Title>
            <Card.Text className='cardText'>
              Análise de dados sobre o COVID-19,utilizando python, plotly e matplot.
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Col xs lg="4">
      <Card className='card'>
        <Card.Img className='card-imgs' variant="top" src={san} />
          <Card.Body className='details'>
            <Card.Title className='cardHeader'>
              <Link to="https://github.com/AIROTIVBR/Java-Project-OOPJ" target='blank'>Projeto 9</Link>
            </Card.Title>
            <Card.Text className='cardText'>
            Aplicação web feita em grupo utilizando Java, Spring boot e SQL.
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Col xs lg="4">
      <Card className='card'>
        <Card.Img className='card-imgs' variant="top" src={trunfo} />
          <Card.Body className='details'>
            <Card.Title className='cardHeader'>
              <Link to="https://github.com/AIROTIVBR/Project8?tab=readme-ov-file" target='blank'>Projeto 8</Link>
            </Card.Title>
            <Card.Text className='cardText'>
              Recriação do jogo de cartas, com o tema de haikyuu, feito com HTML, Javascript e CSS.
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Col xs lg="4">
      <Card className='card'>
        <Card.Img className='card-imgs' variant="top" src={base} />
          <Card.Body className='details'>
            <Card.Title className='cardHeader'>
              <Link to="https://airotivbr.github.io/Project7/" target='blank'>Projeto 7</Link>
            </Card.Title>
            <Card.Text className='cardText'>
            Conversor de bases numéricas(binário,decimal e hexadecimal).
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Col xs lg="4">
      <Card className='card'>
        <Card.Img className='card-imgs' variant="top" src={todo} />
          <Card.Body className='details'>
            <Card.Title className='cardHeader'>
            <Link to="https://airotivbr.github.io/Desafio-LTD-Web/" target='blank'>Projeto 6</Link>
            </Card.Title>
            <Card.Text className='cardText'>
            To-do List com local storage e função de filtro, deleção e edição.
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Col xs lg="4">
      <Card className='card'>
        <Card.Img className='card-imgs' variant="top" src={web} />
          <Card.Body className='details'>
            <Card.Title className='cardHeader'>
            <Link to="https://airotivbr.github.io/Web-site/" target='blank'>Projeto 5</Link>
            </Card.Title>
            <Card.Text className='cardText'>
            Trabalho da cadeira de desenvolvimento web sobre série de livros.
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Col xs lg="4">
      <Card className='card'>
        <Card.Img className='card-imgs' variant="top" src={guess} />
          <Card.Body className='details'>
            <Card.Title className='cardHeader'>
            <Link to="https://airotivbr.github.io/Project3/" target='blank'>Projeto 4</Link>
            </Card.Title>
            <Card.Text className='cardText'>
              Jogo de advinhação entre os números de 0 a 10 feito com HTML, CSS e Javascript.
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Col xs lg="4">
      <Card className='card'>
        <Card.Img className='card-imgs' variant="top" src={sizes} />
          <Card.Body className='details'>
            <Card.Title className='cardHeader'>
            <Link to="https://airotivbr.github.io/Project1/" target='blank'>Projeto 3</Link>
            </Card.Title>
            <Card.Text className='cardText'>
              Conversor de medidas em Inglês, feito com CSS, HTML e Javascript
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Col xs lg="4">
      <Card className='card'>
        <Card.Img className='card-imgs' variant="top" src={game} />
          <Card.Body className='details'>
            <Card.Title className='cardHeader'>
            <Link to="https://airotivbr.github.io/project--gaming-info/" target='blank'>Projeto 2</Link>
            </Card.Title>
            <Card.Text className='cardText'>
              Página de curiosidades sobre meu hobbie de jogar video games feito com HTML e CSS.
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Col xs lg="4">
      <Card className='card'>
        <Card.Img className='card-imgs' variant="top" src={yene} />
          <Card.Body className='details'>
            <Card.Title className='cardHeader'>
            <Link to="https://airotivbr.github.io/Project2/" target='blank'>Projeto 1</Link>
            </Card.Title>
            <Card.Text className='cardText'>
              Conversor de moeda de Real para Yene feito com HTML, CSS e Javascript.
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Row className="footer"></Row>
    </Row>  
    </Container>  
    </>
  );
}
}

export default Projetos;