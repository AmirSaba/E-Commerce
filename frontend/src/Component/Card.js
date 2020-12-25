import React, { useState,useEffect } from 'react';
import { Card } from 'antd';
import 'firebase/storage'
import "./Card.css"


import {storage} from "../firebase";
const { Meta } = Card;



export default function RecipeReviewCard(props) {
    const [Props,setProps] = useState(props); 
    const [Laptop,setLaptop] = useState(false);   
    const [Phone,setPhone] = useState(false);    
    const [Watch,setWatch] = useState(false);   
    const [UrlPhoto,setUrlPhoto] = useState('');


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
          <text> {props.element.NomDuProduit}</text>
          <text> {props.element.marque}</text>

      
      
        </Card>
          
         
        }
         {
           
          Phone && 
          <Card
          hoverable
          style={{ width: 350,borderRadius : "5",border :"solid 1px",margin : 30,marginTop : 90 }}
          cover={<img alt="example" src={UrlPhoto} />}
        >
          <text> {props.element.NomDuProduit}</text>
          <text> {props.element.marque}</text>      
      
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

/*
  { 
          Laptop && 
          <Card
          hoverable
          style={{ width: 350,borderRadius : "5",border :"solid 1px",margin : 30,marginTop : 90 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <text> </text>
      
      
        </Card>
          
         
        }
         {
          Phone && 
          <Card
          hoverable
          style={{ width: 350,borderRadius : "5",border :"solid 1px",margin : 30,marginTop : 90 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <text></text>
      
      
        </Card>
          
         
        }
         {
          Watch && 
          <Card
          hoverable
          style={{ width: 350,borderRadius : "5",border :"solid 1px",margin : 30,marginTop : 90 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <text></text>
      
      
        </Card>
          
         
        }
        */