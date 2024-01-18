import React from "react";
import { Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sobre from "./Coomponents/Sobre.js";
import Projetos from "./Coomponents/Projetos.js";
// import Certificados from "./Coomponents/Certificados.js";

function App() {
  return (
   <div className="App">
    <Switch>
    <Route exact path="/">
    <Sobre />
    </Route>
    <Route path="/Projetos">
    <Projetos />
    </Route>
</Switch>
    </div>
  );
}

export default App;
