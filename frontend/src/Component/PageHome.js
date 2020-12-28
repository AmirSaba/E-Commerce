import React, { useState,useEffect } from 'react';
import {auth} from '../firebase';
import { Link } from "react-router-dom";
import Card from "./Card";
import Header from "./Header"
import './PageHome.css';
import axios from "axios";

// ************************************ //
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

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
        <button style = {{width : 100,height : 100, marginTop : 90}}> Panier</button>
        </Link>
        <div className ="List">

          <div className ="LaVraiListe">
          <List
      component="nav"
      aria-labelledby="nested-list-subheader"

      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
         </div>

        </div>

        <Header Name = {NomUser}/>
        <div className = "Card">
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

     //   <h1> You are in home page {NomUser}</h1>
/*
   Bollen &&  KeysOfTab.map((element,index)=>{
            ////  console.log(element);
              //console.log(ValuesOfTab[index])
              let Tab2 = ValuesOfTab[index];

             let KeysOfTab2 = Object.keys(Tab2);
             let ValeurOfTab2 = Object.values(Tab2);
          //   console.log(KeysOfTab2);
          //   console.log(ValeurOfTab2);
              KeysOfTab2.map((element2,index)=>{
              //  console.log(ValeurOfTab2[index])
                let Tab3 = ValeurOfTab2[index]
                let KeysOfTab3 = Object.keys(Tab3);
                let ValeurOfTab3 = Object.values(Tab3);
                console.log("here we are",KeysOfTab3);
                console.log('here we are to value',ValeurOfTab3);
                                
                element2 && <h1> hemmp</h1>  

             })
             
            })
            */