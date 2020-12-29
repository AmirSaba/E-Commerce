import React, { useState,useEffect } from 'react';
import {auth} from '../firebase';
import { Link } from "react-router-dom";
import Card from "./Card";
import Header from "./Header"
import './PageHome.css';
import axios from "axios";
import {AiOutlinePoweroff} from "react-icons/ai"

// ************************************ //
import { makeStyles } from '@material-ui/core/styles';
import {FaShoppingBasket} from  'react-icons/fa';
import Column from 'antd/lib/table/Column';


// ************************************ //
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "rgb(212, 250, 250)",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));



export default function PageHome(props) {
  const [Props,setProps] = useState(props); 
  const [NomUser,setNomUser] = useState("");
  const [Tab,setTab] = useState('');
  const [KeysOfTab,setKeysOfTab] = useState('');
  const [ValuesOfTab, setValuesOfTab] = useState('');
  const [Bollen,setBollen] = useState(false);
  const [TabESsai,setTabESsai] = useState(["1","2"]);

  // Première version de la page home de l'utilsateur, pour verifier le fonctionnement de l'authentification  $
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    // Récupérer le nom de l'utilisateur
    let str = Props.CurrentUser.email;
    
    str = str.replace(/\@.*/,'');
    console.log(str);
    // Récupérer la liste des produits pour les afficher
    // depuis le backend

    axios.get("http://localhost:5006/GetProducts/getList").then((res) => {
      console.log(res.data);
      // On sépare les l'objet en 2 tableau
      // le premier tableau "y" va contenir la catégorie du produit " Laptop , Watch , Phone"
     if (res.data != null){
      let y = Object.keys(res.data);
      // Le deuxième tableau "x" va contenir les détails de chaque produits 
      let x = Object.values(res.data);
      console.log('x',x);
      // Enregistrement des tableau dans le state
     

      setKeysOfTab(y);
      setValuesOfTab(x);
      setBollen(true);

      setNomUser(str);

     }

    })

     },[]);
  
  return (
    <div className = "DivP">
      
         <Link to = "Panier"> 
        <button style = {{width : 100,height : 100, marginTop : 90 ,fontSize : 50, marginLeft : 30,backgroundColor : "white"}}> <FaShoppingBasket/> </button>
        </Link>
       
        <div className ="List">

          <div className ="LaVraiListe">
     
         </div>

        </div>

        <Header CurrentUser = {Props}/>
        <div className = "Card">
          { 
          
            Bollen &&  KeysOfTab.map((element,index)=>{
              let Tab2 = Object.values(ValuesOfTab);
               let ValuesOfTab2 = Object.values(Tab2);
              
               let KeysOfTab2 = Object.keys(ValuesOfTab2[index]);
               let LesValeurs = Object.values(ValuesOfTab2[index]);

               if (element) {
                 return ( 
                 <div style={{ display : "flex", flexDirection : 'row'}}>

                  {
                    KeysOfTab2.map((element2,index)=>{
                      let LesVraiValeurs = Object.values(LesValeurs[index])
              
                      let NomDuProduit = Object.keys(LesValeurs[index]);
 
                      return (
                      <div>
                        
                        {LesVraiValeurs.map((element3,index)=>{
                          console.log(NomDuProduit[index])

                           let yui = {
                             NomDuProduit : NomDuProduit[index],
                             marque : element2,
                             Caracteristique : element3

                           }
                           let t = KeysOfTab[index];
                           return (
                             
                             <Card element = {yui}/>
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
