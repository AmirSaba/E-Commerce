import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './Header'
import "./Panier.css"
import TextField from '@material-ui/core/TextField';

import { List, Avatar } from 'antd';
import 'antd/dist/antd.css'; 

import axios from "axios"


class Panier extends Component {

constructor(props) {
    super(props);
    this.state = {
        Elements : this.props.ElementDuPanier,
        Quantité : [],
        MarqueDesElements : [""],
        a :""
    
    };
    
}



render() { 
console.log(this.props);


  return ( 
      <div style  = {{display: "flex", flexDirection :'column' }} >
       <Header/>
       <div style ={{display : 'flex', justifyContent : 'center' , marginTop : 100, marginBottom : 100}}>
       <h1 > Votre Panier</h1>
       </div>
       <div className = "PanierContent">
           { this.state.Elements.map ((element,index) =>{
              let y = this.props.Element[index].Caracteristique.QuantiteStock
              let zz = this.props.Element[index].marque;
             
               return (
                <div className= "DivPanierEnglobante">
                <div style = {{ display : "flex", flexDirection : "row"}}>
                <h1 style = {{marginRight : 40 , width : 200 }}>{element}</h1>

                <TextField id="outlined-basic" label="Quantité" type ="number" variant="outlined" InputProps={{ inputProps: { min: 0, max: y} }} style ={{ width : 150}}
                value = {this.state.Quantité[index]}
                onChange = {(event)=> { let t = this.state.Quantité ;
                                         t[index] = event.target.value;
                                         let z = this.state.MarqueDesElements;
                                         z[index] = zz;
                                         this.setState({Quantité : t , MarqueDesElements : z})}}
                />
              
                </div>
                <br />
            </div>
              )
           })

           }
            <div className ="DivbuttonEnglobante">
            <button className = "Button" onClick = {()=>{
                let ObjectDeReservation = {
                    ProduitCommander : this.state.Elements,
                    QuantiteCommander : this.state.Quantité,
                    MarqueDesProduits : this.state.MarqueDesElements,
                    Email : this.props.CurrentUser.email,
                }

                console.log(ObjectDeReservation)
                axios.post("http://localhost:5010/AjouterCommande/Ajout", ObjectDeReservation).then((res) => { })


            }}> Commander </button>           

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