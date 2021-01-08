import React, { useState } from 'react';
import './AjouterProduit.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

import UploadImage from "./UploadImage/UploadImage";

import axios from "axios"



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '55ch',
      display : 'flex',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: '55ch',
  },
}));


export default function AjouterPc() {
  let [Marque, setMarque] = useState("");
  let [Nom, setNom] = useState("");
  const [Stockage, setStockage] = useState("");
  let [Produit , setProduit] = useState("Laptop");
  
  let [ObjectToStoreImage , setObjectToStoreImage] = useState("");


  const [Prix, setPrix] = useState("");
  const [QuantiteStock, setQuantiteStock] = useState("");

  const [GenerationDuPc, setGenerationDuPc] = useState('');
  const [open, setOpen] = useState(false);

  const [Ram, setRam] = useState('');
  const [open2, setOpen2] = useState(false);

  const [ProduitAjouter,setProduitAjouter] = useState(false);



  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();

  const handleChange = (event) => {
    setRam(event.target.value);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleChange2 = (event) => {
    setGenerationDuPc(event.target.value);
  };


  return (
  <div>
    <form className={classes.root} noValidate autoComplete="off">
     
      <TextField id="outlined-basic" label="Marque Du Pc" variant="outlined" value ={Marque} onChange ={(event)=>{setMarque(event.target.value)}} />
      <TextField id="outlined-basic" label="Nom Du Pc" variant="outlined" value ={Nom} onChange ={(event)=>{setNom(event.target.value)}} />

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Génération du Pc</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open2-select"
          open={open2}
          onClose={handleClose2}
          onOpen={handleOpen2}
          value={GenerationDuPc}
          onChange={handleChange2}
        >
         
          <MenuItem value={"i3"}>i3</MenuItem>
          <MenuItem value={"i5"}>i5</MenuItem>
          <MenuItem value={"i7"}>i7</MenuItem>
          <MenuItem value={"i9"}>i9</MenuItem>

        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Ram</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={Ram}
          onChange={handleChange}
        >
         
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={32}>32</MenuItem>

        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="Stockage" type ="number" variant="outlined" value ={Stockage} onChange ={(event)=>{ if (event.target.value >0) setStockage(event.target.value)}} />



      <TextField id="outlined-basic" label="Prix" type ="number" variant="outlined" value ={Prix} onChange ={(event)=>{ if (event.target.value >0) setPrix(event.target.value)}} />
      <TextField id="outlined-basic" label="Quantite Stock" type ="number"  min= "10" max="100" variant="outlined" value ={QuantiteStock} onChange ={(event)=>{ if (event.target.value >0) setQuantiteStock(event.target.value)}} />
      <div style={{ display : "flex", flexDirection : "row"}}>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="Normal"
        style ={{marginLeft : 60,marginTop : 30}}
        startIcon={<SaveIcon />}
        onClick ={()=>{
          if ( Marque != "" && Nom !="" && Stockage !="" && QuantiteStock !="" && Ram != "" && GenerationDuPc != "" && Prix !=""){

            const SendProduct = {
              "Marque" : Marque,
              "Nom" : Nom,
              "GenerationDuPc" : GenerationDuPc,
              "Ram" : Ram,
              "Stockage" : Stockage,
              "Prix" : Prix,
              "QuantiteStock" :  QuantiteStock,
            }
            console.log (SendProduct);
            axios.post("http://localhost:5009/AjouterLaptop/Ajout", SendProduct).then((res) => { })
            setProduitAjouter(false)

         
        }
        else {
          setProduitAjouter(true)
        }
      
      
      
      }}
      >
        Save
      </Button>
      {
        ProduitAjouter && 
        <text style = {{color : 'green', fontSize : 17}}> veuillez remplir tous les champs</text>
      }

    </form>
    {
    <div 
     onClick ={()=>{
      const Object2 = {
        "Produit" : "Laptop",
        "Marque" : Marque,
        "Nom" : Nom
      }
      setObjectToStoreImage(Object2);
    }}>
    <UploadImage {...ObjectToStoreImage  } />
    </div>
    }

  </div>
   
  );
}