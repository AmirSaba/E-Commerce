import React, { Component } from 'react';

import axios from "axios";
import { List, Avatar } from 'antd';
import "./ListeDesCommandes.css"
import Table2 from "./Table";
import Header from "./Header";
import { Empty, Button } from 'antd';
import { Link } from "react-router-dom";


// *************************************************//


const data = [
  
  {
    title: 'Ant Design Title 4',
  },
];


class ListeDesCommandes extends Component {
    constructor(props) {
        super (props)
        this.state = { tab : [], IsBollean : false}
    }

componentDidMount(){
    axios.get("http://localhost:5013/GetCommandes/getList").then((res) => {
      if ( res.data != null){

      this.setState({ tab : Object.values(res.data), IsBollean : true})
    

      }})
    
    
}
    render() { 
        return ( 
          <div>
            <Header/>
            <div style = {{display :'flex',alignItems :'center',justifyContent : 'center', marginTop : 50}}>
            <h1 className ="TitreDeLaPage"> <b> <em>Consulter les Commandes</em></b></h1>
            </div>
          <div className = "englobantepage">
            <div className = "EnglobanteListeDesCommandes">
              
              {
                 this.state.IsBollean && this.state.tab.map((element)=>{
                return(
                  <Table2 data = {element}/>

                )

              })
            }
                { !this.state.IsBollean && 
                
                  <div>
                       <Empty
                     image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                     imageStyle={{
                       height: 160,
                     }}
                     description={
                       <span>
                      Pas de commande effectuer pour le moment
                       </span>
                     }
                   >
                   </Empty>
                       </div>
                

                }


            </div>
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

