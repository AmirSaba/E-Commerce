import React, { useState,useEffect } from 'react';
import axios from "axios";
import ListeDesProduits from "./ListeDesProduits";
import "./ConsulterLesProduits.css"

export default function ConsulterLesProduits() {
  const [Tab,setTab] = useState('');
  const [KeysOfTab,setKeysOfTab] = useState('');
  const [ValuesOfTab, setValuesOfTab] = useState('');
  const [Bollen,setBollen] = useState(false);

 useEffect(() => {
 // Récupérer le nom de l'utilisateur
    
     axios.get("http://localhost:5006/GetProducts/getList").then((res) => {
      console.log(res.data);
     let y = Object.keys(res.data);
     let x = Object.values(res.data);
     console.log('x',x);
    // Enregistrement des tableau dans le state
    
  if ( y != null ){
    
      setKeysOfTab(y);
      setValuesOfTab(x);
      setBollen(true);
    
    
     }
    
     })
    
  },[]);
  
    return (
      <div className = "NotreDiv">
          
       
       <div className = "hlo">
          { 
          
            Bollen &&  KeysOfTab.map((element,index)=>{
              let Tab2 = Object.values(ValuesOfTab);
               let ValuesOfTab2 = Object.values(Tab2);
              
               let KeysOfTab2 = Object.keys(ValuesOfTab2[index]);
               let LesValeurs = Object.values(ValuesOfTab2[index]);
               if (element) {
                 return ( <div>

                  {
                    KeysOfTab2.map((element2,index)=>{
                      let LesVraiValeurs = Object.values(LesValeurs[index])
                 
                 let NomDuProduit = Object.keys(LesValeurs[index]);
 
                      return (<div>
                        
                        {LesVraiValeurs.map((element3,index)=>{
                          console.log(NomDuProduit[index])

                           let yui = {
                             NomDuProduit : NomDuProduit[index],
                             marque : element2,
                             Caracteristique : element3

                           }
                           let t = KeysOfTab[index];
                           return (
                             
                            <ListeDesProduits element = {yui}/>
                            )
                     
                        })}



                         </div>)
                    })
                  }


                 </div>)
               }


             

            })
          }
          
     

        </div>
      </div>
    );
  }