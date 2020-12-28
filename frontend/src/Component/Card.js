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

 let x = Props.element.Caracteristique.Type;
 if (x === "Laptop")
 setLaptop(true);
 if ( x=== "Phone")
 setPhone(true)
 if ( x=== "Watch")
 setWatch(true)

 
{storage
 .ref(`images/${Props.element.Caracteristique.Type+"'/'"}${Props.element.marque+"'/'"}${Props.element.NomDuProduit+".jpg"}`)
    .getDownloadURL()
    .then((url) => {
      setUrlPhoto(url);
    });


}
   
},[])

  
    return (
      <div>
        
       { 
          Laptop && 
          <Card
          hoverable
          style={{ width: 350, borderRadius : "5",border :"solid 1px",margin : 30,marginTop : 90 }}
           cover={<img alt="example"   src={UrlPhoto} />}
        >
           <div style ={{ display : 'flex', flexDirection : 'row'}} >
          <div>
          <text> {props.element.NomDuProduit}</text>
          <br/>
          <text> {props.element.marque}</text>  
          </div>
          {
            !IsPanier &&
          <button style = {{marginLeft : 200,backgroundColor : "white", width : 60,fontSize :20}} onClick ={()=>{
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
            <button style = {{marginLeft : 200,backgroundColor : "white",width : 60, fontSize :20}} onClick ={()=>{
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
          style={{ width: 350,borderRadius : "5",border :"solid 1px",margin : 30,marginTop : 90 }}
          cover={<img alt="example" src={UrlPhoto} />}
        > 
        <div >
          <div>
          <text> {props.element.NomDuProduit}</text>
          <br/>
          <text> {props.element.marque}</text>  
          </div>
        </div>
              
      
        </Card>
          
         
        }
         {
          Watch && 
          <Card
          hoverable
          style={{ width: 350,borderRadius : "5",border :"solid 1px",margin : 30,marginTop : 90 }}
          cover={<img alt="example"  src={UrlPhoto} />}
        >
          <text> {props.element.NomDuProduit}</text>
          <text> {props.element.marque}</text>          
      
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