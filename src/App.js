import React from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sobre from "./Coomponents/Sobre.js";
import Projetos from "./Coomponents/Projetos.js";
import Certificados from "./Coomponents/Certificados.js";

class App extends React.Component {
    
  render() {
  return (
   <div className="App">
    <Routes>
      <Route path="/" element={<Sobre/>} />
      <Route path="/Projetos" element={<Projetos/>} />
      <Route path="/Certificados" element={<Certificados/>} />
    </Routes>
    </div>
  );
}
}
export default App;
