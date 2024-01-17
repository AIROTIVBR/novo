import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sobre from "./Coomponents/Sobre.js";
import Projetos from "./Coomponents/Projetos.js";
import Certificados from "./Coomponents/Certificados.js";

function App() {
  return (
   <div className="App">
    <HashRouter>
    <Routes>
      <Route path="/" element={<Sobre/>} />
      <Route path="/Projetos" element={<Projetos/>} />
      <Route path="/Certificados" element={<Certificados/>} />
    </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
