import './App.css';
import AjouterProduit from "./AjouterUnProduit/AjouterProduit";
import AjouterPc from "./AjouterUnProduit/AjouterPc";
import ConsulterLesProduits from "./Components/ConsulterLesProduits";
import ListeDesCommandes from "./Components/ListeDesCommandes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import React, { useState } from 'react';
import AjouterTel from './AjouterUnProduit/AjouterTel';
function App() {
  return (
<Router>
        <div>
          <Switch>
             <Route exact path="/" component={AjouterProduit} />
             <Route exact path="/ConsulterLesProduits" component={ConsulterLesProduits} />
             <Route exact path="/ListeDesCommandes" component={ListeDesCommandes} />

          </Switch>
        </div>
      </Router>  )
   
}


export default App;
