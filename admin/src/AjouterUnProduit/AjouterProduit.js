import React, { useState } from 'react';
import './AjouterProduit.css';
import Phone from '../images/phone.jpg';
import Watch from '../images/watch.jpg';
import Laptop from '../images/laptop.jpg';
import AjouterPc from "./AjouterPc";
import AjouterWatch from "./AjouterWatch";
import AjouterTel from "./AjouterTel";
import Header from "../Components/Header"

export default function AjouterProduit() {
    const [SLaptop, setSLaptop] = useState(false);
    const [SPhone, setSPhone] = useState(false);
    const [SWatch, setSWatch] = useState(false);

const SelectionLaptop = () =>{
setSLaptop(true);
setSPhone(false);
setSWatch(false)

}
const SelectionPhone = () =>{
setSPhone(true);
setSLaptop(false);
setSWatch(false)
}

const SelectionWatch = () =>{
setSWatch(true);
setSLaptop(false);
setSPhone(false);
}


  return (
  <div> 
    <Header/>
    <div className ="AjouterProduit">
      <h1 className ="TitreDeLaPage"> <b> <em>Ajouter un produit</em></b></h1>
      <div className = "EnglobanteDesImages">
      <div className ="PourChaqueImage" onClick ={SelectionLaptop} >
        <img style ={{ width : 295,height :205, marginRight:70,marginLeft:70,marginTop : 70, }} src={Laptop} />
        <h3>Laptop</h3>
      </div>
      <div className ="PourChaqueImage" onClick ={SelectionPhone}>
         <img style ={{ width : 295,height :205, marginRight:70,marginLeft:70 ,marginTop : 70}}  src={Phone} />
         <h3> Phone</h3>
       </div>
       <div className ="PourChaqueImage" onClick ={SelectionWatch}>
        <img style ={{ width : 295,height :205,  marginRight:70,marginLeft:70 ,marginTop : 70 }} src={Watch} />
        <h3> Watch</h3>
      </div>

     
      </div>
      <div>
          { SLaptop &&  
          <div> 

              <AjouterPc/>
          </div>
          }
          { SWatch &&  
          <div> 

              <AjouterWatch/>
          </div>
          }
          { SPhone &&  
          <div> 

              <AjouterTel/>
          </div>
          }
      </div>
    </div>
    </div>
  );
}