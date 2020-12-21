import React, { useState,useEffect } from 'react';
import {auth} from '../firebase';
import { Link } from "react-router-dom";


export default function PageHome(props) {
  const [Props,setProps] = useState(props); 
  const [NomUser,setNomUser] = useState("");
  // Première version de la page home de l'utilsateur, pour verifier le fonctionnement de l'authentification  $
  useEffect(() => {
    // Récupérer le nom de l'utilisateur
    let str = Props.CurrentUser.email;
    
    str = str.replace(/\@.*/,'');
    console.log(str);
    setNomUser(str);
    ;  });
  
  return (
    <div>
        <h1> You are in home page {NomUser}</h1>
        <Link to="/">
       
        <button onClick ={()=>{auth.signOut();}}> Disconnect</button>
        </Link>
    </div>
  );
}