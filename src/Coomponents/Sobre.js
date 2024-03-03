import React from "react";
import {Link} from "react-router-dom";
import Navb from "./NavBar.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Ft3 from "./assets/imgs/apre.png"
import Ft2 from "./assets/imgs/jogo.png";
import unimed from "./assets/imgs/unimed.png"
import spm from "./assets/imgs/spm.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css';


 function Sobre () {
    return(
        <>
            <Navb/>
            <Container >
            <Row>
                <Col xs lg="6">
                <Carousel>
                <Carousel.Item>
                    <img
                    className="card-foto"
                    src={Ft2}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="card-foto"
                    src={Ft3}
                    alt="Second slide"
                    />
                </Carousel.Item>
                </Carousel>
                </Col>
                <Col xs lg="6" className="sobre">
                    <h3 className="titulo">Sobre mim</h3>
                    <p className="text">Estou em busca de ascensão profissional no setor de QA (qualidade de software/quality assurance).Tenho como objetivo desenvolver minha 
                    carreira, atuando em projetos de impacto procurando crescer e aprender em um ambiente dinâmico.Me identifico com a área principalmente por agir em busca do 
                    melhor resultado para atender as necessidades do usuário e lidar com todo o processo de desenvolvimento do produto.De forma geral tenho uma abordagem obejetiva
                    e proativa com enfoque na resolução de problemas. </p>
                    <Link to="https://linktr.ee/vitoriamorim" target="blank" rel="noopener noreferrer">
                            <button className="button">
                                <span className="button-content">Linktree</span>
                            </button>
                    </Link>
                </Col>
            </Row>
            <br></br><br></br><br></br>
            <Row>
                <h2 className="titulo-exp">Experiência</h2>
            </Row>
            <Row className="bor">
                <Col xs lg="4" >
                    <img
                    className="foto-logo1"
                    src={unimed}
                    alt="First slide"
                    />
                </Col>
                <Col xs lg="8" className="">
                    <h4 className="exp">Estagiária em dados</h4>
                    <p className="text-exp">
                        Atualmente tenho o cargo de estagiária em dados no Hospital Unimed Caruaru, minha atividade envolve desenvolver aplicações para a otimização
                         e modernização de diversos processos, disponibilizando. Até o momento utilizamos Python, SQL, Git, Excel, pandas, numpy, flask, matplotlib, plotly e dash, 
                         além da metodologia ágil de Scrum.
                         Comecei nesse cargo em de Setembro de 2023 e sigo atualmente.
                    </p>
                </Col>
            </Row>
            <Row className="bor">
                <Col xs lg="8" className="">
                    <h4 className="exp">Analista de qualidade</h4>
                    <p className="text-exp">
                        Estou atuando como analista de qualidade em um projeto voluntário para a Secretaria de políticas para mulheres de Caruaru, 
                        nosso objetivo é desenvolver do zero uma aplicação web para digitalização de processos da secretaria aderindo a metodologia ágil do Scrum.
                        Meu trabalho envolve a escrita de casos e cenários de teste, o planejamento e a realização de testes manuais unitários, funcionais, de layout e de regressão, além de ter auxiliado os Product Owners responsáveis
                        na análise de requisitos e no planejamento de sprints, utilizamos as plataformas do trello e também do jira. Estou nesse cargo desde Abril de 2023 e sigo atualmente.
                    </p>
                </Col>
                <Col xs lg="4">
                    <img
                    className="foto-logo2"
                    src={spm}
                    alt="First slide"
                    />
                </Col>
            </Row>
            <Row>
                <Col xs lg="4" className="">
                </Col>
                <Col xs lg="8" className="">
                </Col>
            </Row>
            <br></br><br></br><br></br>
            <Row>
                <Col xs lg="6" className="">
                    <h2 className="tituloskills">Soft skills</h2>
                    <ul className="skill">
                        <li><p className="skills">Boa relação interpessoal</p></li>
                        <li><p className="skills">Pensamento analítico</p></li>
                        <li><p className="skills">Colaboração</p></li>
                        <li><p className="skills">Proatividade</p></li>
                        <li><p className="skills">Comunicação clara e objetiva</p></li>
                        <li><p className="skills">Atenção ao detalhe</p></li>
                        <li><p className="skills">Em busca de melhoria contínua</p></li>
                        <li><p className="skills">Dedicação</p></li>
                    </ul>
                </Col>
                <Col xs lg="6" className="">
                    <h2 className="tituloskills">Hard skills</h2>
                    <div className="espc">
                    <p className="minitil">Meus pontos fortes são:</p>
                    <p className="skills">Planejamento de testes, documentação e report de bugs, criação de cenários e casos de teste, testes automatizados e execução de testes
                     manuais (unitário, black-box, regressão, funcionais).Tenho familiaridade com o Git, Selenium Webdriver e com as metodologias ágeis Scrum e Kanban.</p>
                    <br></br>
                    <p className="minitil">Conheço e me dou bem com:</p>
                    <p className="skills">HTML, CSS, React e Boostrap, Bancos de dados relacionais(MySQL) e 
                    Bancos não relacionais(MongoDB) e as ferramentas Power BI, Jira e Trello.</p>
                    <br></br>
                    <p className="minitil">Sou capaz de dar auxílio em:</p>
                    <p className="skills">Java e Spring boot. Área de computação em nuvem principalmente dos serviços da AWS. </p>
                    </div>
                </Col>
                <Row className="footer"></Row>
            </Row>
            </Container>
        </>
    );
};

export default Sobre;




