import React, { useState } from 'react';
import {auth} from '../firebase'

export default function PageHome() {
  // Première version de la page home de l'utilsateur, pour verifier le fonctionnement de l'authentification  
  return (
    <div>
        <h1> You are in home page</h1>
        <button onClick ={()=>{auth.signOut();}}> Disconnect</button>
    </div>
  );
}