import React, { Component } from 'react';
import { connect } from "react-redux";


class Panier extends Component {

constructor(props) {
    super(props);
    this.state = {

    };
}



render() { 
console.log(this.props);

  return ( <h1> hello</h1> );
    }
}
 
const mapStateToProps = (state) => {
    return state;
  };
  export default connect(mapStateToProps)(Panier);;