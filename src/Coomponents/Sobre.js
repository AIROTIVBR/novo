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



function Sobre() {
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
                    <p className="text">Atualmente, tenho 19 anos e estou cursando o quinto semestre de Análise e Desenvolvimento de Sistemas (ADS) na Unifavip Wyden.
                     Sou uma estudante dedicada com um pensamento crítico e estou constantemente buscando maneiras de aprimorar minhas habilidades.
                     Estou ativamente procurando oportunidades de trabalho na área de T.I, onde espero combinar meu aprendizado com experiências práticas para meu desenvolvimento profissional.
                     Tenho um forte desejo de adquirir conhecimento e contribuir para projetos significativos na sociedade.
                     Estou particularmente interessada em áreas como ciência de dados e engenharia de software, pretendo me aprimorar nessas áreas ao longo deste ano.
                     Estou ansiosa para poder aplicar meu conhecimento e habilidades em projetos relevantes, enquanto continuo minha jornada de aprendizado e crescimento profissional.</p>
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
                         e modernização de diversos processos. Até o momento utilizamos Python, SQL, Git, Excel, pandas, numpy, flask, matplotlib, plotly e dash, 
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
                        nosso objetivo é desenvolver do zero uma aplicação web para digitalização de processos da secretaria aderindo á metodologia ágil do Scrum.
                        Meu trabalho envolve a realização de testes manuais unitários, funcionais e de regressão, além de ter auxiliado os Product Owners responsáveis
                        na análise de requisitos e no planejamento de sprints. Estou nesse cargo desde Abril de 2023 e sigo atualmente.
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
                        <li><p className="skills">Sempre inovando</p></li>
                        <li><p className="skills">Proatividade</p></li>
                        <li><p className="skills">Comunicação eficaz</p></li>
                        <li><p className="skills">Criticidade</p></li>
                        <li><p className="skills">Sempre aprendendo</p></li>
                        <li><p className="skills">Dedicação</p></li>
                    </ul>
                </Col>
                <Col xs lg="6" className="">
                    <h2 className="tituloskills">Hard skills</h2>
                    <div className="espc">
                    <p className="minitil">Meus pontos fortes são:</p>
                    <p className="skills">Python e algumas de suas bibliotecas e frameworks(Pandas, Flask, Numpy, plotly, dash) e focando em no setor de qualidade a 
                    escrita de casos de teste e a realização de testes manuais (unitário, black-box, regressão, funcionais). Tenho familiaridade com o Git e com as metodologias
                    ágeis Scrum e Kanban.</p>
                    <br></br>
                    <p className="minitil">Conheço e me dou bem com:</p>
                    <p className="skills">HTML, CSS, React e Boostrap na área de web, me sinto confiante com Bancos de dados relacionais(MySQL) e 
                    Bancos não relacionais(MongoDB).Assim como Power BI para a análise exploratória de dados.</p>
                    <br></br>
                    <p className="minitil">Sou capaz de dar auxílio em:</p>
                    <p className="skills">Java e Spring boot. Tenho conhecimentos teóricos
                     bem fundamentados na área de nuvem principalmente dos serviços da AWS,não possuo muita experiência. </p>
                    </div>
                </Col>
                <Row className="footer"></Row>
            </Row>
            </Container>
        </>
    );
};

export default Sobre;




