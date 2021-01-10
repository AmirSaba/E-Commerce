import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './Header'
import "./Panier.css"
import TextField from '@material-ui/core/TextField';

import {IoMdArrowRoundBack} from 'react-icons/io'
import { List, Avatar } from 'antd';
import 'antd/dist/antd.css'; 
import {Link} from 'react-router-dom'
import axios from "axios"


class Panier extends Component {

constructor(props) {
    super(props);
    this.state = {
        Elements : this.props.ElementDuPanier,
        Quantité : [],
        MarqueDesElements : [""],
        a :"",
        send : true
    
    };
    
}



render() { 
console.log(this.props);


  return ( 
      <div style  = {{display: "flex", flexDirection :'column' }} >
        

       <Header/>
       <div style ={{display : 'flex', justifyContent : 'center' , marginTop : 70, marginBottom : 100}}>

       <h1 > <b><em>Votre Panier</em></b></h1>
       </div>
       <div className = "PanierContent">
           { this.state.Elements.map ((element,index) =>{
              let y = this.props.Element[index].Caracteristique.QuantiteStock
              let zz = this.props.Element[index].marque;
             
               return (
                <div className= "DivPanierEnglobante">
                <div style = {{ display : "flex", flexDirection : "row"}}>
                <h1 style = {{marginRight : 40 , width : 400 , color :'#002A6F' }}> <b> <em>Produit</em></b> : {zz} {element}</h1>

                <TextField id="outlined-basic" label="Quantité" type ="number" variant="outlined" InputProps={{ inputProps: { min: 1, max: y} }} style ={{ width : 150}}
                value = {this.state.Quantité[index]}
                onChange = {(event)=> {
                if(event.target.value >0 && event.target.value != "0")
                 { let t = this.state.Quantité ; t[index] = event.target.value;
                     let z = this.state.MarqueDesElements; z[index] = zz; 
                     this.setState({Quantité : t , MarqueDesElements : z})} 
                else 
                { let t = this.state.Quantité ; t[index] = 1; 
                    let z = this.state.MarqueDesElements; z[index] = zz;
                this.setState({Quantité : t , MarqueDesElements : z}) } }}
                />
              
                </div>
                <br />
            </div>
              )
           })

           }
            <div className ="DivbuttonEnglobante">
                <Link to ="PageHome">
            <button className = "Button" onClick = {()=>{
                let ObjectDeReservation = {
                    ProduitCommander : this.state.Elements,
                    QuantiteCommander : this.state.Quantité,
                    MarqueDesProduits : this.state.MarqueDesElements,
                    Email : this.props.CurrentUser.email,
                }

                console.log(ObjectDeReservation)

               
                if (this.state.Quantité.length === this.props.ElementDuPanier.length)
                {
                axios.post("http://localhost:5010/AjouterCommande/Ajout", ObjectDeReservation).then((res) => { })
                axios.post("http://localhost:5011/SendMail/SendMail", ObjectDeReservation).then((res) => { })
                alert("Commande effectuer")
                    
                console.log('yes');
                }
                else { alert("Error : Votre Commande n'a pas été effectuer veuillez remplir tous les champs")}


            }}> Commander </button>    
            </Link>       
            
            </div>
        </div>
      </div>
  
  );
    }
}
 
const mapStateToProps = (state) => {
    return state;
  };
  export default connect(mapStateToProps)(Panier);


  /*
    <button onClick = {()=>{
                     const action = {
                        type: "SupprimerDuPanier",
                        value: element,
                      }
                      this.props.dispatch(action);
                      this.setState({Quantité : ["cc"] })
                      this.setState({ a : "b"})
                   // window.location.reload();

                }}>  Supprimer </button>
*/
