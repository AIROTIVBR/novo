
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Sobre from "./Coomponents/Sobre.js";
import Projetos from "./Coomponents/Projetos.js";

function Rout (){
   return(
       <HashRouter>
        <Routes>
            <Route path="/" element={<Sobre/>} />
            <Route path="/Projetos" element={<Projetos/>} />
        </Routes>
       </HashRouter>
   )
}

export default Rout;