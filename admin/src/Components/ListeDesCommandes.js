import React, { Component } from 'react';

import axios from "axios";
import { List, Avatar } from 'antd';
import "./ListeDesCommandes.css"
import Table2 from "./Table"

// *************************************************//


const data = [
  
  {
    title: 'Ant Design Title 4',
  },
];


class ListeDesCommandes extends Component {
    constructor(props) {
        super (props)
        this.state = { tab : []}
    }

componentDidMount(){
    axios.get("http://localhost:5013/GetCommandes/getList").then((res) => { this.setState({ tab : Object.values(res.data)})})

}
    render() { 
        return ( 
          <div className = "englobantepage">
            <h1> La liste des commandes </h1>
            <div className = "EnglobanteListeDesCommandes">
              
              {
              this.state.tab.map((element)=>{
                return(
                  <Table2 data = {element}/>

                )

              })
            }
                


            </div>
            </div>



        );
    }
}
 
export default ListeDesCommandes;

/*
    return ( 
            <div className = "EnglobanteListeDesCommandes">
              
              {
              this.state.tab.map((element)=>{
                return(
                  <div className = "englobanteDesElements">
                  <h1> {element.Email}</h1>
                  { element.MarqueDesProduits.map((element2,index)=>{
                      return(
                    <div className = "englobanteDesElements2">
                      <h1 style  = {{ marginLeft : 20}}> {element2}</h1>
                      <h1 style  = {{ marginLeft : 20}}> {element.ProduitsCommander[index]}</h1>
                      <h1 style  = {{ marginLeft : 20}}> {element.QuantiteCommander[index]}</h1>
                    
                     </div> 
                      )
                  })

                  }

                  </div>

                )

              })
            }
                


            </div>




        );
        */

