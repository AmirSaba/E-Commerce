import React, { useState,useEffect } from 'react';
import { Card } from 'antd';
import 'firebase/storage'
import {FiShoppingCart} from  'react-icons/fi';
import {FaShoppingCart} from  'react-icons/fa';

import {storage} from "../firebase";
import Column from 'antd/lib/table/Column';

import { connect } from "react-redux";
import Panier from './Panier'

const { Meta } = Card;



 function RecipeReviewCard(props) {
    const [Props,setProps] = useState(props); 
    const [Laptop,setLaptop] = useState(false);   
    const [Phone,setPhone] = useState(false);    
    const [Watch,setWatch] = useState(false);   
    const [UrlPhoto,setUrlPhoto] = useState('');
    const [IsPanier, setIsPanier] = useState(false);


useEffect(()=>{
 console.log(Props.ElementDuPanier);
 let TableauDeVerification = Props.ElementDuPanier;
     TableauDeVerification.map((element)=>{
      if ( element === Props.element.NomDuProduit){
        setIsPanier(true)
      }

     })
 let x = Props.element.Caracteristique.Type;
 if (x === "Laptop")
 setLaptop(true);
 if ( x=== "Phone")
 setPhone(true)
 if ( x=== "Watch")
 setWatch(true)

 
{
  storage
 .ref(`images/${Props.element.Caracteristique.Type+"'/'"}${Props.element.marque+"'/'"}${Props.element.NomDuProduit+".jpg"}`)
    .getDownloadURL()
    .then((url) => {
      if (url !== null){
      setUrlPhoto(url);}

    });
  
    storage
    .ref(`images/${Props.element.Caracteristique.Type+"'/'"}${Props.element.marque+"'/'"}${Props.element.NomDuProduit+".png"}`)
       .getDownloadURL()
       .then((url) => {
         if (url !== null){
         setUrlPhoto(url);}
         
       });


}
   
},[])

  
    return (
      <div>
        
       { 
          Laptop && 
          <Card
          hoverable
          style={{ width: 432,height : 550, borderRadius : "5",border :"solid 1px",margin : 30,marginTop : 90 }}
           cover={<img alt="example"  style = {{width : 432 , height : 350}} src={UrlPhoto} />}
        >
           <div style ={{ display : 'flex', flexDirection : 'row' }} >
          <div style = {{ bottom : 10}}>
          <text style ={{fontSize : 20 , color :'#002A6F'}}> <b>{props.element.marque}</b></text> 
          <br/>
          <text style ={{fontSize : 20,color :'#002A6F'}}> <b> <em>{props.element.NomDuProduit}</em></b></text>
 
          <br/>
          <text style ={{fontSize : 17}}> <b>Géneration : {props.element.Caracteristique.Generation}</b></text>  
          <br/>
          <text style ={{fontSize : 17}}> <b>Ram : {props.element.Caracteristique.Ram} Go</b></text> 
          <br/>
          <text style ={{fontSize : 17}}> <b>Prix : {props.element.Caracteristique.Prix} E</b></text>   
          </div>
          {
            !IsPanier &&
          <button style = {{marginLeft : 200,backgroundColor : "white", width : 60,fontSize :40 , width : 60, height : 75}} onClick ={()=>{
            setIsPanier(true);
            
            const action = {
              type: "AjouterAuPanier",
              value: Props.element,
            };
            Props.dispatch(action);
            console.log(Props)
          }}> <FiShoppingCart/></button>
          }
          {
            IsPanier &&
            <button style = {{marginLeft : 200,backgroundColor : "white",width : 60, fontSize :40 , width : 60, height : 75}} onClick ={()=>{
              setIsPanier(false);
              const action = {
                type: "AjouterAuPanier",
                value: Props.element,
              };
              Props.dispatch(action);
            }}> <FaShoppingCart/></button>
          }
        </div>
      
      
        </Card>
          
         
        }
         {
           
          Phone && 
          <Card
          hoverable
          style={{ width: 433, height : 550,borderRadius : "5",border :"solid 1px",margin : 30,marginTop : 90 }}
          cover={<img alt="example" style = {{width : 433 , height : 350}} src={UrlPhoto} />}
        > 
        <div style ={{ display : 'flex', flexDirection : 'row' }}>
          <div style ={{bottom : 10}}>
          <text style ={{fontSize : 20 , color :'#002A6F'}}> <b>{props.element.marque}</b></text> 
          <br/>
          <text style ={{fontSize : 20,color :'#002A6F'}}> <b> <em>{props.element.NomDuProduit}</em></b></text> 
          <br/>
          <text style ={{fontSize : 17}}> <b>Stockage : {props.element.Caracteristique.Stockage} </b></text>  
          <br/>
          <text style ={{fontSize : 17}}> <b>Ram : {props.element.Caracteristique.Ram} Go</b></text>  
          <br/>
          <text style ={{fontSize : 17}}> <b>Prix : {props.element.Caracteristique.Prix} E</b></text>  

          </div>
          {
            !IsPanier &&
          <button style = {{marginLeft : 200,backgroundColor : "white", width : 60,fontSize :40 , width : 60, height : 75}} onClick ={()=>{
            setIsPanier(true);
            
            const action = {
              type: "AjouterAuPanier",
              value: Props.element,
            };
            Props.dispatch(action);
            console.log(Props)
          }}> <FiShoppingCart/></button>
          }
          {
            IsPanier &&
            <button style = {{marginLeft : 200,backgroundColor : "white",width : 60, fontSize :40 , width : 60, height : 75}} onClick ={()=>{
              setIsPanier(false);
              const action = {
                type: "AjouterAuPanier",
                value: Props.element,
              };
              Props.dispatch(action);
            }}> <FaShoppingCart/></button>
          }
        </div>
              
      
        </Card>
          
         
        }
         {
          Watch && 
          <Card
          hoverable
          style={{ width: 433, height : 550,borderRadius : "5",border :"solid 1px",margin : 30,marginTop : 90 }}
          cover={<img alt="example" style = {{width : 433 , height : 350}}   src={UrlPhoto} />}
        > 
         <div style ={{ display : 'flex', flexDirection : 'row' }}>
           <div style = {{bottom : 10}}>
           <text style ={{fontSize : 20 , color :'#002A6F'}}> <b>{props.element.marque}</b></text> 
          <br/>
          <text style ={{fontSize : 20,color :'#002A6F'}}> <b> <em>{props.element.NomDuProduit}</em></b></text>
          <br/>
          <text style ={{fontSize : 17}}> <b>Type : {props.element.Caracteristique.Type} </b></text> 
          <br/>
          <text style ={{fontSize : 17}}> <b>Prix : {props.element.Caracteristique.Prix} E</b></text> 
          <br/>
           </div>
           {
            !IsPanier &&
          <button style = {{marginLeft : 200,backgroundColor : "white", width : 60,fontSize :40 , width : 60, height : 75}} onClick ={()=>{
            setIsPanier(true);
            
            const action = {
              type: "AjouterAuPanier",
              value: Props.element,
            };
            Props.dispatch(action);
            console.log(Props)
          }}> <FiShoppingCart/></button>
          }
          {
            IsPanier &&
            <button style = {{marginLeft : 200,backgroundColor : "white",width : 60, fontSize :40 , width : 60, height : 75}} onClick ={()=>{
              setIsPanier(false);
              const action = {
                type: "AjouterAuPanier",
                value: Props.element,
              };
              Props.dispatch(action);
            }}> <FaShoppingCart/></button>
          }
         </div>
                   
      
        </Card>
          
         
        }
 
      </div>
  
    );
}

// On a connecter le state globale au props de RecipeReviewCard

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(RecipeReviewCard);