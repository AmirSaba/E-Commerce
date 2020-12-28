import React, { Component } from 'react';

import axios from "axios";
import { List, Avatar } from 'antd';

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
            <div>
              
           
              {
              this.state.tab.map((element)=>{
                return(
                  <div style = {{display :'flex',flexDirection : 'row'}}>
                  <h1> {element.Email}</h1>
                  { element.MarqueDesProduits.map((element2,index)=>{
                      return(
                    <div style = {{ display : 'flex',flexDirection : 'row', padding : 20}}>
                      <h1> {element2}</h1>
                      <h2> {element.ProduitsCommander[index]}</h2>
                      <h2> {element.QuantiteCommander[index]}</h2>
                    
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
    }
}
 
export default ListeDesCommandes;

