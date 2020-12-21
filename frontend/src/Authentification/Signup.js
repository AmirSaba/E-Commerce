import React from "react";
import { Drawer, Form, Input, Button } from "antd";
import "./Signup.css";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import axios from "axios";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      MessageError : null, 
      ContenuMessageError : "", // Le contenu du message d'erreur lors de la création du compte ( si il y'en a)
      email: "",
      MotDePasse: "",
      ConfirmationMotDePasse: "",
      MessageSucces : false,
      MotDePasseDifferent: false,
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    }); 
  };

  render() {
    return (
      <div>
        <a style={{ color: "blue" }} onClick={this.showDrawer}>
          SignUp
        </a>

        <Drawer
          title="Insciption"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button className="Bin2" onClick={this.onClose}>
                Cancel
              </Button>
           
                <Button
                  className="Bin2"
                  onClick={() => {
                    if (
                      this.state.MotDePasse ===
                      this.state.ConfirmationMotDePasse
                    ) {
                      const obj = {
                        email : this.state.email,
                        password : this.state.MotDePasse 
                       }
                      // axios permet de faire la relation frontend backend
                      // dans cet exemple elle est utilisée pour le signup d'un nouveau utilisateur
                      // la fonction qui permet le signup est dans le backend

                      axios.post("http://localhost:5001/SignUp/signup", obj).then((res) => {
                         if(res.data.sent == true){
                         // SI le compte est créer et l'email de vérification est envoyé
                         // Un message de succés sera affiché

                         this.setState({ MessageSucces : res.data.sent })}
                         // Si le compte existe déja ou une adresse email invalide est entrée un message d'erreur sera affiché

                         else this.setState({MessageError : true, ContenuMessageError : res.data.sent})
                      });
                    
                    } else {
                      this.setState({ MotDePasseDifferent: true });
                    }

                  }}
                >
                  Submit
                </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Form.Item
              name="name"
              label="Email"
              rules={[{ required: true, message: "Please enter Email" }]}
            >
              <Input
                size="large"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
                placeholder="Email "
                className="input email"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="Password"
              label="Password"
              rules={[
                { required: true, message: "Please enter user Password" },
              ]}
            >
              <Input
                size="large"
                type="password"
                placeholder="Password"
                value={this.state.MotDePasse}
                onChange={(event) => {
                  this.setState({ MotDePasse: event.target.value });
                }}
                className="input email"
                prefix={<UnlockOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="Confirmation Password"
              label="Confirmation Password"
              rules={[
                { required: true, message: "Please enter user Password" },
              ]}
            >
              <Input
                size="large"
                type="password"
                placeholder="Password"
                value={this.state.ConfirmationMotDePasse}
                onChange={(event) => {
                  this.setState({ ConfirmationMotDePasse: event.target.value });
                }}
                className="input email"
                prefix={<UnlockOutlined />}
              />
            </Form.Item>
            {this.state.MotDePasseDifferent && (
              <Form.Item name="" label="">
                {" "}
                <text style={{ fontSize: 30 }}>
                  {" "}
                  Les Mot De Passe ne correspondent pas{" "}
                </text>
              </Form.Item>
            )}
             {this.state.MessageSucces && (
               <div>
              <Form.Item name="" label="">
                {" "}
                <text style={{ marginTop : 30, fontSize: 30 , color :'green' }}>
                  {" "}
                 Compte ajouté avec succées !
                </text>
                
              </Form.Item>
                            <Form.Item name="" label="">

              <text style={{ marginTop : 20, fontSize: 17 , color :'blue',fontFamily : "500" }}>
                  {" "}
                Veuillez valider votre mail par le lien envoyé, pour pouvoir se connecter
                </text>
                </Form.Item>
                </div>

            )}
             {this.state.MessageError && (
               <div>
              <Form.Item name="" label="">
                {" "}
                <text style={{ marginTop : 30, fontSize: 24 , color :'red' }}>
                  {this.state.ContenuMessageError}
                </text>
                
              </Form.Item>
            
                </div>

            )}
            </Form> 
        </Drawer>
      </div>
    );
  } 
}

export default Signup;
