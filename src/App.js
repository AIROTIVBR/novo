import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sobre from "./Coomponents/Sobre.jsx";
import Projetos from "./Coomponents/Projetos.jsx";
import Certificados from "./Coomponents/Certificados.jsx";

function App() {
  return (
   <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sobre/>} />
      <Route path="/Projetos" element={<Projetos/>} />
      <Route path="/Certificados" element={<Certificados/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
