import React, { Component } from "react";
import './App.css';
import Login from './Authentification/Login';
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageHome from './Component/PageHome'

import axios from "axios";

// Le Provider va se charger de distribuer notre store globale sur toute l'application
import { Provider } from "react-redux";
import Store from "./Redux/Store/ConfigureStore"
import Panier from "./Component/Panier";





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((CurrentUser) => {
      if (CurrentUser) {
        let emailVerified = CurrentUser.emailVerified;
        console.log(emailVerified);
        console.log("Auth_Changed", CurrentUser.email);
        this.setState({ CurrentUser: CurrentUser,EmailVerified : emailVerified });
      } else {
        this.setState({ CurrentUser });
        console.log("watt");
      }
    });
  }

  render() {
    const { CurrentUser } = this.state;
    let { EmailVerified } = this.state;

    return (
      <Provider store={Store}>
        <Router>
          <div>
            <Switch>
              {!CurrentUser && <Route exact path="" component={Login} />}
              {(CurrentUser && !EmailVerified) && (
               <Route exact path="" component={Login} />
              )}
              {(CurrentUser && EmailVerified) && (
                <Route
                  path="/PageHome"
                  exact
                  component={() => <PageHome CurrentUser={CurrentUser}/>}
                />  
                 )}
               {(CurrentUser && EmailVerified) && (
                <Route
                  path="/Panier"
                  exact
                  component={() => <Panier CurrentUser={CurrentUser}/>}
                />  
                 )}
             
            </Switch>
          </div>
        </Router>
        </Provider>
    );
  }
}

export default App;
