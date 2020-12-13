import React, { useState } from "react";
import "./Login.css";
import { Form } from "antd";
import "antd/dist/antd.css";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Signup from "./Signup";
import { auth, provider } from "../firebase";
import GoogleButton from "react-google-button";

import { Link } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState();
  const [MotDePasse, setMotDePasse] = useState();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="wat">
      <h1 style={{ marginBottom: 200 }}></h1>
      <svg
        className="bingo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 40 940 320"
      >
        <path
          className="bingo2"
          fill-opacity="1"
          d="M0,192L720,256L1440,96L1440,0L720,0L0,0Z"
        ></path>
        <defs>
          <linearGradient id="MyGradient">
            <stop offset="10%" stop-color="#003D9C" />
            <stop offset="90%" stop-color="#0064FF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="EnglobanteDes2Div">
        <div className="Englobante">
          <div className="englobanteLogin">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <h1 className="Titre"> Welcome to E-commerce </h1>

              <Form.Item
                style={{ marginBottom: 30, marginTop: 90 }}
                name="username"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <TextField
                  id="standard-basic"
                  label="Email"
                  className="InputS"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Item>
              <Form.Item
                style={{ marginBottom: 37 }}
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <TextField
                  id="standard-basic"
                  label="Password"
                  className="InputS"
                  type="password"
                  value={MotDePasse}
                  onChange={(event) => setMotDePasse(event.target.value)}
                />
              </Form.Item>
              <Form.Item
                style={{ marginBottom: 30, marginTop: 0, marginLeft: 160 }}
              >
              <Link to="/PageHome">

               <Button
                    className="ButtonLogin"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      // Une fois l'utilisateur créer il pourra s'authentifier avec cette methode ci-dessous
                      auth
                        .signInWithEmailAndPassword(email, MotDePasse)
                        .then(() => {
                          console.log("You're Sigin");
                        })
                        .catch(function (error) {
                          // Handle Errors here.
                          var errorCode = error.code;
                          var errorMessage = error.message;
                          // ...
                          console.log(error);
                        });
                    }}
                    disableElevation
                  >
                    Sign in
                  </Button>
              </Link>
              </Form.Item>

              <Form.Item
                style={{
                  marginBottom: 30,
                  marginTop: 20,
                  marginLeft: 120,
                  alignItems: "center",
                }}
              >
                  <GoogleButton
                    type="dark"
                    onClick={() => {
                      // Ajout de la méthode d'authentification par google
                      // elle est prédifinie par Firebase
                      auth
                        .signInWithPopup(provider)
                        .then(function (result) {
                          // This gives you a Google Access Token. You can use it to access the Google API.
                          var token = result.credential.accessToken;
                          // The signed-in user info.
                          var user = result.user;
                          // ...
                        })

                        .catch(function (error) {
                          // Handle Errors here.
                          var errorCode = error.code;
                          var errorMessage = error.message;
                          // The email of the user's account used.
                          var email = error.email;
                          // The firebase.auth.AuthCredential type that was used.
                          var credential = error.credential;
                          // ...
                        });
                    }}
                  />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: 30, marginTop: 40, marginLeft: 85 }}
              >
                <text className="TextToSignUp">
                  Or, if you d'ont have an account ? <Signup />
                </text>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="photo"> </div>
      </div>
    </div>
  );
}

export default Login;
