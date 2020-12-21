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


export default function AjouterWatch() {
  const [MarqueWatch, setMarqueWatch] = useState("");
  const [NomMontre, setNomMontre] = useState("");

  const [Prix, setPrix] = useState("");
  const [QuantiteStock, setQuantiteStock] = useState("");

  const [Bracelet, setBracelet] = useState("");

  const [Type, setType] = useState('');
  const [open, setOpen] = useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();

  const handleChange = (event) => {
    setType(event.target.value);
  };

 


  return (
  <div>
    <form className={classes.root} noValidate autoComplete="off">
     
      <TextField id="outlined-basic" label="Marque De la montre" variant="outlined" value ={MarqueWatch} onChange ={(event)=>{setMarqueWatch(event.target.value)}} />
      <TextField id="outlined-basic" label="Nom Du la montre" variant="outlined" value ={NomMontre} onChange ={(event)=>{setNomMontre(event.target.value)}} />

      

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={Type}
          onChange={handleChange}
        >
         
          <MenuItem value={"Quartz"}>Quartz</MenuItem>
          <MenuItem value={"Mécanique"}>Mécanique</MenuItem>
          <MenuItem value={"Connectée"}>Connectée</MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="Bracelet"  variant="outlined" value ={Bracelet} onChange ={(event)=>{ if (event.target.value >0) setBracelet(event.target.value)}} />



      <TextField id="outlined-basic" label="Prix" type ="number" variant="outlined" value ={Prix} onChange ={(event)=>{ if (event.target.value >0) setPrix(event.target.value)}} />
      <TextField id="outlined-basic" label="Quantite Stock" type ="number"  min= "10" max="100" variant="outlined" value ={QuantiteStock} onChange ={(event)=>{ if (event.target.value >0) setQuantiteStock(event.target.value)}} />
     

      <Button
        variant="contained"
        color="primary"
        size="Normal"
        style ={{marginLeft : 60,marginTop : 30}}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>

    </form>
  </div>
   
  );
}