import React, { useState,useEffect } from 'react';
import {auth} from '../firebase';
import { Link } from "react-router-dom";
import Card from "./Card";
import Header from "./Header"
import './PageHome.css'

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
    setNomUser(str);
    setTab(["c"])
     },[]);
  
  return (
    <div className = "DivP">
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
        <Card/>
        <Card/>

        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>
       

       
    </div>
  );
}

     //   <h1> You are in home page {NomUser}</h1>
