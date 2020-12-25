import React, { useState,useEffect } from 'react';
import { List, Avatar } from 'antd';
import 'firebase/storage'
import {storage} from "../firebase";

import 'antd/dist/antd.css'; //

export default function ListeDesProduits(props) {
    const [Props,setProps] = useState(props); 
    const [Laptop,setLaptop] = useState(false);   
    const [Phone,setPhone] = useState(false);    
    const [Watch,setWatch] = useState(false);   
    const [UrlPhoto,setUrlPhoto] = useState('');

    const data = [
        {
          title: 'Ant Design Title 1',
        },
       
      ];

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
          <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar style ={{ width : 90, height : 90}}src={UrlPhoto} />}
              title={
                <div>
                <text>{ props.element.marque} {props.element.NomDuProduit}</text>
                <br/>
                <text>Generation {props.element.Caracteristique.Generation}</text>
                <br/>
                <text>Ram {props.element.Caracteristique.Ram} Go</text>
                <br/>
                <text>Stockage {props.element.Caracteristique.Stockage} Go</text>
                <br/>
                <text>Prix {props.element.Caracteristique.Prix} E</text>
                <br/>
                 <text>_______________________________________________</text>
      
                </div>
                }              
              
            />
            
          </List.Item>
        )}
         />
         
        }
         {
           
          Phone && 
          <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
              avatar={<Avatar style ={{ width : 90, height : 90}}src={UrlPhoto} />}
              title={
                <div>
                <text>{ props.element.marque} {props.element.NomDuProduit}</text>
                <br/>
                <text>Stockage {props.element.Caracteristique.Stockage} Go</text>
                <br/>
                <text>Ram {props.element.Caracteristique.Ram} Go</text>
                <br/>
                <text>Prix {props.element.Caracteristique.Prix} E</text>

                <br/>
                <text>_______________________________________________</text>
      
                </div>
                }       

              />
            </List.Item>
          )}
           />
         
        }
         {
          Watch && 
          <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
              avatar={<Avatar style ={{ width : 90, height : 90}}src={UrlPhoto} />}
              title={
                <div>
                <text>{ props.element.marque} {props.element.NomDuProduit}</text>
                <br/>
                <text>Type {props.element.Caracteristique.TypeWatch}</text>
                <br/>
                <text>Bracelet {props.element.Caracteristique.Bracelet} </text>
                <br/>
                <text>Prix {props.element.Caracteristique.Prix} E</text>
                <br/>
                <text>_______________________________________________</text>
      
  
                </div>
                }                  
              />
            </List.Item>
          )}
           />
          
         
        }
 
      </div>
  
    );
}