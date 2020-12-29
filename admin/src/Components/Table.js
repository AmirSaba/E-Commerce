import React, { Component } from 'react';
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;


class Table2 extends Component {
    constructor(props) {
        super (props);
        this.state = {
            data : []
        }
    }
componentDidMount(){
    let x = this.props.data ;
    console.log(x)
    let tab = [];
    let objectdata = {
    
    }
    x.MarqueDesProduits.map((element,index) =>{
        objectdata = {
            Email : x.Email,
            MarqueDuProduit: element,
            NomDuProduit : x.ProduitsCommander[index],
            QuantiteCommander : x.QuantiteCommander[index]
        }
        tab.push(objectdata);

    })


  
    this.setState({data : tab})
}
render() { 

        return ( 
<Table dataSource={this.state.data}>
    <ColumnGroup title="">
      <Column title=" Email" dataIndex="Email" key="Email" />
      <Column title=" Marque du produit" dataIndex="MarqueDuProduit" key="Marque du produit" />
      <Column title=" Nom du produit" dataIndex="NomDuProduit" key="Nom du produit" />
      <Column title=" Quantite Commander" dataIndex="QuantiteCommander" key="QuantiteCommander" />
    
    </ColumnGroup>
    
   
    
  </Table>
         );
    }
}
 
export default Table2;

  
